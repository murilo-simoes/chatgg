"use client";
import {
  Page,
  Container,
  WrapperChats,
  Chat,
  Nome,
  DivNome,
  WrapperInputs,
  DivCentralizada,
  ModalHeaderDiv,
  ModalBodyFooter,
  ModalContainer,
  ModalBodyDiv,
} from "./style";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { api } from "../../api/axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus as icon,
  faCircleInfo as icon2,
  faClose as icon3,
} from "@fortawesome/free-solid-svg-icons";
import ChatMessages from "../ChatMessages";
import NoChat from "../NoChat";

const Chats = () => {
  const key = ["/chat/listar"];
  const [nome, setNome] = useState("");
  const [chat, setChat] = useState(0);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentChatId, setCurrentChatId] = useState(0);
  const [currentChatName, setCurrentChatName] = useState("Desconhecido");
  const [emailAddChat, setEmailAddChat] = useState();

  function openModal(id, nomeChat) {
    setIsOpen(true);
    setCurrentChatId(id);
    setCurrentChatName(nomeChat);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "40%",
      height: "40%",
      backgroundColor: "#2e2e2e",
      borderRadius: "1rem",
    },
  };
  Modal.setAppElement("#app");

  //#region FETCH E DELETE

  function ShowChat() {
    if (chat === 0) {
      return <NoChat />;
    } else {
      return <ChatMessages chatId={chat} />;
    }
  }

  const addChatMutation = useMutation(
    async (email) =>
      await api.post("/chat/add", {
        email: email,
        chatId: currentChatId,
      }),
    {
      onSuccess: () => {
        alert("Usuário adicionado ao grupo com sucesso!");
        setEmailAddChat("");
      },

      onError: (err) => {
        alert(JSON.stringify(err.response.data.message));
      },
    }
  );

  useEffect(() => {
    ShowChat();
  });

  if (typeof window !== "undefined") {
    var user = JSON.parse(window.localStorage.getItem("user"));
  }

  const client = useQueryClient();

  const fetchList = useQuery(
    key,
    async () =>
      await api
        .post("/chat/listar", { userId: user.id })
        .then((response) => response.data)
  );

  const addMutation = useMutation(
    async () =>
      await api.post("/chat/create", {
        nomeChat: nome,
        criadorId: user.id,
      }),
    {
      onSuccess: () => {
        client.invalidateQueries("/chat/listar");
      },

      onError: () => {
        console.log("Deu erro");
      },
    }
  );

  const deleteMutation = useMutation(
    async (id) =>
      await api.post("/chat/delete", {
        userId: user?.id,
        chatId: id,
      }),
    {
      onSuccess: () => {
        client.invalidateQueries("/chat/listar");
      },

      onError: () => {
        console.log("Deu erro");
      },
    }
  );

  if (fetchList?.isLoading) {
    return (
      <DivCentralizada>
        <Loading type={"spin"} color={"#ffffff"} />
      </DivCentralizada>
    );
  }
  if (addMutation?.isLoading) {
    return <p>Adicionando chat...</p>;
  }
  if (fetchList?.error || addMutation?.error) {
    return <p>Errooooooooo</p>;
  }

  const handleClickCreateChat = (e) => {
    e.preventDefault();
    if (nome === "") {
      return alert("O nome do chat não pode ser vazio!");
    } else {
      addMutation.mutate();
    }
  };

  const handleDeleteMutation = (id) => {
    deleteMutation.mutate(id);
    // onClick={() => handleDeleteMutation(item.id)}
  };

  //#endregion

  //#region ADICIONAR AO CHAT

  const adicionarAoGrupo = (e, email) => {
    e.preventDefault();
    addChatMutation.mutate(email);
  };

  //#endregion

  return (
    <Page>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Detalhes do grupo"
      >
        <ModalContainer>
          <ModalHeaderDiv>
            <h1>Informações do Grupo</h1>
            <button onClick={closeModal}>
              <FontAwesomeIcon className="icon" icon={icon3} />
            </button>
          </ModalHeaderDiv>
          <ModalBodyDiv>
            <h1>Nome do grupo: {currentChatName}</h1>
            <form
              className="formAdd"
              onSubmit={(e) => adicionarAoGrupo(e, emailAddChat)}
            >
              <input
                placeholder="Digite o email para adicionar ao grupo!"
                onChange={(e) => setEmailAddChat(e.target.value)}
                type="text"
                className="inputAddGrupo"
                value={emailAddChat}
              />
              <div className="infoChat">
                <FontAwesomeIcon className="icon" icon={icon} />
              </div>
            </form>
          </ModalBodyDiv>
          <ModalBodyFooter>
            <button
              onClick={() => {
                handleDeleteMutation(currentChatId);
                closeModal();
                setChat(0);
              }}
            >
              Sair do Grupo
            </button>
          </ModalBodyFooter>
        </ModalContainer>
      </Modal>
      <Container>
        <WrapperChats>
          <div className="chats">
            {fetchList?.data?.map((item) => {
              return (
                <Chat key={item.id}>
                  <DivNome
                    onClick={() => setChat(item.id)}
                    color={
                      item.id !== chat ? "3px solid #fff" : "3px solid #7a0101"
                    }
                  >
                    <Nome>{item.nomeChat}</Nome>
                  </DivNome>
                  <div
                    className="infoChat"
                    onClick={() => openModal(item.id, item.nomeChat)}
                  >
                    <FontAwesomeIcon className="icon" icon={icon2} />
                  </div>
                </Chat>
              );
            })}
          </div>
          <WrapperInputs>
            <input
              onSubmit={handleClickCreateChat}
              onChange={(e) => setNome(e.target.value)}
              className="newGroup"
            />
            <button className="botaoNovoChat" onClick={handleClickCreateChat}>
              {" "}
              <FontAwesomeIcon className="icon" icon={icon} />
            </button>
          </WrapperInputs>
        </WrapperChats>
      </Container>
      <ShowChat />
    </Page>
  );
};

export default Chats;
