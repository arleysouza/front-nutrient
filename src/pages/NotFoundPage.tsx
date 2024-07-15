import styled from "styled-components";
import { Header } from "../components";

export default function NotFoundPage() {
  return (
    <Wrapper>
      <Header />
      <BodyWrapper>Página não encontrada</BodyWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  box-sizing: border-box;
  font-size: 150%;
  color: #555;
  font-weight: bold;
`;
