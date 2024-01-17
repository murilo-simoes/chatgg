"use client";
import CardLogin from "@/components/CardLogin";
import "../style/reset.css";
import "../style/style";
import { Container } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  return (
    <>
      <Container>
        <ToastContainer theme="dark" />
        <CardLogin
          title={"Login"}
          buttonText={"ENTRAR"}
          linkFirstText={"Não tem uma conta?"}
          linkSecondText={"Registre-se!"}
          redirect={"/register"}
          type={"LOGIN"}
        />
      </Container>
    </>
  );
};

export default Login;
