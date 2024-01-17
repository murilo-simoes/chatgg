"use client";

import { useState } from "react";
import { Container, Wrapper, Botao, WrapperElements } from "./style";
import { ToastContainer, toast } from "react-toastify";
import Link from "next/link";
import { api } from "@/api/axios";

const CardLogin = ({
  title,
  buttonText,
  linkFirstText,
  linkSecondText,
  redirect,
  type,
}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const notifyWarning = (texto) => toast.warning(texto);
  const notifySuccess = (texto) => toast.success(texto);

  async function registerUser() {
    if (nome === "" || email === "" || password === "") {
      return notifyWarning("Por favor, preencha todos os campos!");
    }
    if (!email.includes("@")) {
      return notifyWarning("Email fora do padrão!");
    }
    await api
      .post("/users/create", {
        nome: nome,
        email: email,
        password: password,
      })
      .then(async (response) => {
        notifySuccess("Usuário cadastrado com sucesso!");
        await loginRegistro();
      })
      .catch((error) => {
        if (error.response.data.message === "Usuário ja cadastrado!") {
          return notifyWarning("Email já cadastrado!");
        }
        if (
          error.response.data.message ===
          "Senha inválida. Certifique-se de que ela tenha 8 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial!"
        ) {
          return notifyWarning(
            "Senha inválida. Certifique-se de que ela tenha 8 caracteres, pelo menos uma letra maiúscula, um número e um caractere especial!"
          );
        }
      });
  }
  async function loginRegistro() {
    await api
      .post("/users/login", {
        email: email,
        senha: password,
      })
      .then((response) => {
        window.location.href = "/";
      });
  }
  async function loginUser() {
    if (email === "" || password === "") {
      return notifyWarning("Por favor, preencha todos os campos!");
    }
    if (!email.includes("@")) {
      return notifyWarning("Email fora do padrão!");
    }
    await api
      .post("/users/login", {
        email: email,
        senha: password,
      })
      .then((response) => {
        setEmail("");
        setPassword("");
        notifySuccess("Login realizado com sucesso!");
        window.localStorage.setItem("user", JSON.stringify(response.data));
        window.location.href = "/";
      })
      .catch((error) => {
        if (error?.response?.data?.message === "Este usuário não existe!") {
          return notifyWarning("Email não encontrado!");
        }
        if (error?.response?.data?.message === "Senha inválida!") {
          return notifyWarning("Senha incorreta!");
        }
      });
  }
  return (
    <>
      <Wrapper>
        <WrapperElements>
          <h1>{title}</h1>
          {type === "REGISTER" ? (
            <input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              type="text"
              placeholder="Nome de Usuário"
              required
            />
          ) : (
            ""
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            required
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Senha"
            required
          />

          <Botao onClick={type === "REGISTER" ? registerUser : loginUser}>
            {buttonText}
          </Botao>
          <p>
            {linkFirstText}{" "}
            <Link
              style={{ textDecoration: "none", color: "#870A30" }}
              href={redirect}
            >
              {linkSecondText}
            </Link>
          </p>
        </WrapperElements>
      </Wrapper>
    </>
  );
};

export default CardLogin;
