"use client";
import styled from "styled-components";

export const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 30%;
  height: 100%;
  background-color: #4e4e4e;
  min-width: 350px;
  max-width: 560px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #7a0101;
`;

export const ModalHeaderDiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 20%;
  h1 {
    color: #eee;
    font-size: 1.2rem;
  }

  button {
    cursor: pointer;
    border-radius: 1rem;
    width: 32px;
    height: 32px;
    background-color: #4e4e4e;
    border: none;
    transition: 0.1s all ease-in;
    &:hover {
      scale: 1.1;
    }
  }
  button .icon {
    font-size: 1.5rem;
    color: #7a0101;
  }
`;

export const ModalBodyFooter = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  button {
    cursor: pointer;
    border-radius: 1rem;
    width: auto;
    height: 40px;
    background-color: #6e6e6e;
    border: none;
    transition: 0.1s all ease-in;
    color: #7a0101;
    font-size: 1rem;
    font-weight: bold;
    &:hover {
      scale: 1.05;
      color: #eee;
      background-color: #7a0101;
    }
  }
`;

export const ModalBodyDiv = styled.div`
  width: 100%;
  height: 60%;
  padding-top: 2rem;
  h1 {
    color: #fff;
    font-size: 1.2rem;
  }

  .formAdd {
    margin-top: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    .inputAddGrupo {
      margin-right: 1rem;
      padding: 0.5rem;
      border-radius: 0.4rem;
      border: none;
      font-size: 1rem;
    }
    .infoChat {
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 1rem;
      background-color: #212121;
      transition: 0.1s all ease-in;

      &:hover {
        cursor: pointer;
        scale: 1.1;
      }

      .icon {
        font-size: 1rem;
        color: #fff;
      }
    }
  }
`;

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
export const WrapperChats = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;

  .chats {
    width: 90%;
    height: 87.5dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Chat = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  .infoChat {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    background-color: #212121;
    transition: 0.1s all ease-in;

    &:hover {
      cursor: pointer;
      scale: 1.1;
    }

    .icon {
      font-size: 1rem;
      color: #fff;
    }
  }
`;
export const DivNome = styled.div`
  border-radius: 1rem;
  padding-left: 0.5rem;
  height: 60px;
  cursor: pointer;
  width: 80%;
  display: flex;
  justify-content: space-between;
  border: ${({ color }) => (color ? color : "3px solid #fff")};
  align-items: center;
`;
export const Nome = styled.h1`
  color: #fff;
`;

export const WrapperInputs = styled.form`
  height: 12.5dvh;
  width: 100%;
  background-color: #9c0202;
  display: flex;
  justify-content: center;
  align-items: center;

  .botaoNovoChat {
    width: 50px;
    height: 50px;
    margin-left: 1rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212121;
    transition: 0.1s all ease-in;
    border: none;
    &:hover {
      cursor: pointer;
      scale: 1.1;
    }

    .icon {
      width: 60%;
      height: 60%;
      color: #fff;
    }

    @media screen and (min-width: 1920px) {
      width: 65px;
      height: 65px;
    }
  }

  .newGroup {
    width: 65%;
    height: 40%;
    background-color: #212121;
    border: none;
    border-radius: 0.7rem;
    color: #cfcfcf;
    font-size: 1rem;
    outline: #4f4f4f;
    padding: 0.5rem;
  }
`;

export const DivCentralizada = styled.div`
  width: 100%;
  height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
