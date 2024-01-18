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
} from "./style";
import { api } from "../../api/axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus as icon,
  faEllipsis as icon2,
} from "@fortawesome/free-solid-svg-icons";
import ChatMessages from "../ChatMessages";
import NoChat from "../NoChat";

const Chats = () => {
  const key = ["/chat/listar"];
  const [nome, setNome] = useState("");
  const [chat, setChat] = useState(0);

  //#region FETCH E DELETE

  function ShowChat() {
    if (chat === 0) {
      return <NoChat />;
    } else {
      return <ChatMessages chatId={chat} />;
    }
  }

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

  return (
    <Page>
      <Container>
        <WrapperChats>
          <div className="chats">
            {fetchList?.data?.map((item) => {
              return (
                <Chat
                  onDoubleClick={() => handleDeleteMutation(item.id)}
                  key={item.id}
                  onClick={() => setChat(item.id)}
                  color={
                    item.id !== chat ? "3px solid #fff" : "3px solid #7a0101"
                  }
                >
                  <DivNome>
                    <Nome>{item.nomeChat}</Nome>
                    <div className="infoChat">
                      <FontAwesomeIcon className="icon" icon={icon2} />
                    </div>
                  </DivNome>
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
