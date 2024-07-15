import { useState } from "react";
import styled from "styled-components";
import { Input, Button, Header, Error, LinkButton } from "../components";
import { useUser } from "../hooks";

export default function SignUpPage() {
  const [alias, setAlias] = useState("Ana Maria");
  const [mail, setMail] = useState("aba@teste.com");
  const [password, setPassword] = useState("123456");
  const { create, error, setError } = useUser();

  const handleCreate = () => {
    if (!alias) {
      setError({ error: "Forneça o seu nome de usuário" });
    } else if (!mail) {
      setError({ error: "Forneça o e-mail" });
    } else if (!password) {
      setError({ error: "Forneça a senha" });
    } else {
      create(alias, mail, password);
    }
  };

  return (
    <Wrapper>
      <Header />
      {error && <Error>{error.error}</Error>}
      <FieldWrapper>
        
        <TextSld>Cadastro de novo usuário</TextSld>
        <Input
          type="text"
          id="alias"
          label="Nome de usuário"
          value={alias}
          setValue={setAlias}
        />
        <Input
          type="text"
          id="mail"
          label="e-mail"
          value={mail}
          setValue={setMail}
        />
        <Input
          type="password"
          id="password"
          label="Senha"
          value={password}
          setValue={setPassword}
        />
        <LineSld>
          <Button label="Cadastrar" click={handleCreate} />
          <LinkButton label="Logar-se" to="/signin" />
        </LineSld>
      </FieldWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const LineSld = styled.div`
  display: flex;
  margin-top: 10px;
`;

const TextSld = styled.div`
  display: flex;
  font-size: 120%;
  font-weight: bold;
  color: #333;
  margin: 10px 0px;
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  align-self: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  box-sizing: border-box;
`;
