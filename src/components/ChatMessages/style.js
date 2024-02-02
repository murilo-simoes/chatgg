import styled from "styled-components";
export const ContainerTexts = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  overflow-x: hidden;
  background-color: #18191d;
`;
export const DivCentralizada = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #18191d;
`;
export const WrapperTexts = styled.div`
  width: 100%;
  height: 87.5dvh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column-reverse;
  overflow-y: auto;
  align-items: center;
  background-image: url("https://blog.1a23.com/wp-content/uploads/sites/2/2020/02/pattern-4.svg");
  background-repeat: repeat;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d62929;
  }
`;

export const WrapperChatSend = styled.form`
  width: 100%;
  height: 12.5dvh;
  position: relative;
  background-color: #2e2e2e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SendInput = styled.input`
  width: 80%;
  height: 40%;
  background-color: #4f4f4f;
  border: none;
  border-radius: 0.7rem;
  color: #cfcfcf;
  font-size: 1rem;
  outline: #4f4f4f;
  padding: 0.5rem;
  resize: none;
  font-family: "Poppins", sans-serif;

  &::placeholder {
    color: #a2a2a2;
    opacity: 1; /* Firefox */
  }
`;

export const SendButton = styled.div`
  width: 50px;
  height: 50px;
  margin-left: 1rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #404040;
  transition: 0.1s all ease-in;
  &:hover {
    cursor: pointer;
    scale: 1.1;
  }

  .icon {
    width: 45%;
    height: 45%;
    color: #7a0101;
  }

  @media screen and (min-width: 1920px) {
    width: 65px;
    height: 65px;
  }
`;

export const Aviso = styled.div`
  width: 100%;
  height: 87.5dvh;
  display: flex;
  justify-content: center;
`;
export const TextoAviso = styled.div`
  color: #fff;
  font-size: 1.2rem;
  margin-top: 4rem;
`;

export const Messages = styled.div`
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export const LineMessage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: ${({ align }) => (align ? align : "flex-end")};
  align-items: center;
  margin-top: 0.4rem;
  &:first-child {
    margin-top: 3rem;
  }
  &:last-child {
    margin-bottom: 1rem;
  }
`;

export const WrapperMessage = styled.div`
  padding: 1rem;
  width: auto;
  max-width: 550px;
  background-color: ${({ color }) => (color ? color : "#7a0101")};
  border-radius: 1.4rem;
  border: 2px solid #610101;

  .textoMensagem {
    color: #fff;
    line-height: 1.3;
    padding-right: 2rem;
  }

  .dataMensagem {
    color: gray;
    font-size: 0.8rem;
    margin-top: 0.3rem;
    text-align: right;
  }
`;
