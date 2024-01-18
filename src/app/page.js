"use client";
import Chats from "@/components/Chats";
import "./style/reset.css";
import { Container, Wrapper } from "./style/style";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect } from "react";
const queryClient = new QueryClient();

export default function Home() {
  if (typeof window !== "undefined") {
    var user = JSON.parse(window.localStorage.getItem("user"));
  }

  if (user === null) {
    window.location.href = "/login";
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Container>
          <Wrapper>
            <Chats />
          </Wrapper>
        </Container>
      </QueryClientProvider>
    </>
  );
}
