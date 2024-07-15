import { useEffect, useState } from "react";
import styled from "styled-components";
import { Input, Button, Header, Error, PopupMessage } from "../components";
import { useUser } from "../hooks";

export default function SettingsPage() {
  const { token, updateAlias, updateMail, updatePassword, error, setError } = useUser();
  const [alias, setAlias] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");

  useEffect(() => {
    if (token && token.alias && token.mail) {
      setAlias(token.alias);
      setMail(token.mail);
    }
  }, [token]);

  const handleAlias = async () => {
    if (!alias) {
      setError({ error: "Forneça o novo nome de usuário" });
    } else if (alias === token?.alias) {
      setError({ error: "O novo nome de usuário precisa ser diferente" });
    } else {
      const response = await updateAlias(alias);
      if( response ){
        setMessagePopup("Nome de usuário atualizado com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handleMail = async () => {
    if (!mail) {
      setError({ error: "Forneça o novo e-mail" });
    } else if (mail === token?.mail) {
      setError({ error: "O novo e-mail precisa ser diferente" });
    } else {
      const response = await updateMail(mail);
      if( response ){
        setMessagePopup("e-mail atualizado com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handlePassword = async () => {
    if (!password || password.trim().length === 0) {
      setError({ error: "Forneça a nova senha" });
    } else if (password.trim() !== confirmPassword.trim()) {
      setError({ error: "A nova senha e confirmação precisam ser iguais" });
    } else {
      const response = await updatePassword(password.trim());
      if( response ){
        setMessagePopup("Senha atualizada com sucesso");
        setShowPopup(true);
      }
    }
  };

  return (
    <Wrapper>
      <Header />
      {error && <Error>{error.error}</Error>}
      {showPopup && <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />}
      <FieldWrapper>
        
        <TextSld>Configurações</TextSld>
        <Input
          type="text"
          id="alias"
          label="Nome de usuário"
          value={alias}
          setValue={setAlias}
        />
        <LineSld>
          <Button label="Alterar nome de usuário" click={handleAlias} />
        </LineSld>
        <DivSld />
        <Input
          type="text"
          id="mail"
          label="e-mail"
          value={mail}
          setValue={setMail}
        />
        <LineSld>
          <Button label="Alterar e-mail" click={handleMail} />
        </LineSld>
        <DivSld />
        <Input
          type="password"
          id="password"
          label="Nova senha"
          value={password}
          setValue={setPassword}
        />
        <Input
          type="password"
          id="confirmpassword"
          label="Confirmação da nova senha"
          value={confirmPassword}
          setValue={setConfirmPassword}
        />
        <LineSld>
          <Button label="Alterar senha" click={handlePassword} />
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

const DivSld = styled.div`
  display: flex;
  border-top: 1px solid #aaa;
  margin-top: 20px;
`;