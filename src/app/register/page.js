"use client";

import CardLogin from "@/components/CardLogin";
import "../style/reset.css";
import "../style/style";
import { Container } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  return (
    <>
      <Container>
        <ToastContainer theme="dark" />
        {/* card passando as props */}

        <CardLogin
          title={"Crie sua conta!"}
          buttonText={"REGISTRAR"}
          linkFirstText={"Já tem uma conta?"}
          linkSecondText={"Faça Login!"}
          redirect={"/login"}
          type={"REGISTER"}
        />
      </Container>
    </>
  );
};

export default Register;
