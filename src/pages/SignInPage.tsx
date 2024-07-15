import { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, Header, Error, LinkButton } from "../components";
import { useUser } from "../hooks";
import { loadFromLocalStorage } from "../utils";
import { useNavigate } from "react-router-dom";

export default function SignInPage() {
  const [mail, setMail] = useState("aba@teste.com");
  const [password, setPassword] = useState("123456");
  const { token, setToken, login, error, setError } = useUser();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!mail) {
      setError({ error: "Forneça o e-mail" });
    } else if (!password) {
      setError({ error: "Forneça a senha" });
    } else {
      login(mail, password);
    }
  };

  useEffect(() => {
    if (!token) {
      // O usuário será redirecionado para a página de login se ele entrar por alguma outra rota
      const user = loadFromLocalStorage("user");
      if (user) {
        setToken(user);
        navigate("/");
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Wrapper>
      <Header />
      {error && <Error>{error.error}</Error>}
      <FieldWrapper>
        <TextSld>Login</TextSld>
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
          <Button label="Logar" click={handleLogin} />
          <LinkButton label="Cadastrar-se" to="/signup" />
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
