"use client";
import Chats from "@/components/Chats";
import "./style/reset.css";
import { Container, Wrapper } from "./style/style";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <Wrapper>
          <Chats />
        </Wrapper>
      </Container>
    </QueryClientProvider>
  );
}
