"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane as icon } from "@fortawesome/free-solid-svg-icons";
import {
  WrapperTexts,
  ContainerTexts,
  WrapperChatSend,
  SendInput,
  SendButton,
  DivCentralizada,
  Aviso,
  TextoAviso,
  Messages,
  WrapperMessage,
  LineMessage,
} from "./style";
import { api } from "@/api/axios";
import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loading from "../Loading";
const ChatMessages = (chatId) => {
  const [mensagem, setMensagem] = useState();
  const key = ["/message/texts"];

  function SendMessage(e) {
    e.preventDefault();
    if (mensagem === "") {
      return false;
    } else {
      addMutation.mutate();
      setMensagem("");
    }
  }

  const client = useQueryClient();

  const addMutation = useMutation(
    async () =>
      await api.post("/message/send", {
        idSend: user.id,
        mensagem: mensagem,
        chatId: chatId.chatId,
      }),
    {
      onSuccess: () => {
        client.invalidateQueries("/message/texts");
      },

      onError: () => {
        console.log("Deu erro");
      },
    }
  );

  if (typeof window !== "undefined") {
    var user = JSON.parse(window.localStorage.getItem("user"));
  }

  const fetchList = useQuery(
    key,
    async () =>
      await api
        .post("/message/texts", { chatId: chatId.chatId })
        .then((response) => response.data)
  );

  if (fetchList?.isLoading) {
    return (
      <DivCentralizada>
        <Loading type={"spin"} color={"#ffffff"} />
      </DivCentralizada>
    );
  }

  if (fetchList?.error) {
    return <p>Errooooooooo</p>;
  }

  return (
    <ContainerTexts>
      <WrapperTexts>
        <Messages>
          {fetchList.data.length != 0 ? (
            fetchList?.data?.map((item) => {
              return (
                <LineMessage
                  key={item.id}
                  align={item.sendId === user.id ? "flex-end" : "flex-start"}
                >
                  <WrapperMessage
                    color={item.sendId === user.id ? "#7a0101" : "#383737"}
                  >
                    <p>{item.message}</p>
                  </WrapperMessage>
                </LineMessage>
              );
            })
          ) : (
            <Aviso>
              <TextoAviso>
                Mande uma mensagem para começar o papo no grupo!
              </TextoAviso>
            </Aviso>
          )}
        </Messages>
      </WrapperTexts>
      <WrapperChatSend onSubmit={SendMessage}>
        <SendInput
          onChange={(e) => setMensagem(e.target.value)}
          value={mensagem}
          placeholder="Escrever mensagem"
        />
        <SendButton onClick={SendMessage}>
          <FontAwesomeIcon className="icon" icon={icon} />
        </SendButton>
      </WrapperChatSend>
    </ContainerTexts>
  );
};

export default ChatMessages;
