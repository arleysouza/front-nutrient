import { useEffect, useState } from "react";
import styled from "styled-components";
import {
  Input,
  Button,
  Header,
  Error,
  PopupMessage,
  InputDatePicker,
  Select,
} from "../components";
import { useUser } from "../hooks";
import { calculateAge, dateFormat } from "../utils";

export default function ProfilePage() {
  const { profile, saveProfile, deleteProfile, error, setError } = useUser();
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");

  const options = [
    { value: "female", label: "Feminino" },
    { value: "male", label: "Masculino" }
  ];

  useEffect(() => {
    if (profile) {
      setBirthDate(new Date(`${profile.birth_date} 00:00:00`));
      setWeight(profile.weight);
      setSex(profile.sex);
    }
    else{
      setBirthDate(null);
      setWeight("");
      setSex("");
    }
  }, [profile, setError]);

  const handleSave = async () => {
    if (!birthDate) {
      setError({ error: "Forneça a data de nascimento" });
    } else if( calculateAge(birthDate) < 1 ){
      setError({ error: "É necessário idade mínima de 1 ano" });
    } else if (!weight) {
      setError({ error: "Forneça o peso" });
    } else if (!sex) {
      setError({ error: "Forneça o sexo" });
    } else {
      const formattedDate = dateFormat(birthDate); 
      const response = await saveProfile(formattedDate,weight,sex);
      if( response ){
        setMessagePopup("Perfil salvo com sucesso");
        setShowPopup(true);
      }
    }
  };

  const handleDelete = async () => {
    const response = await deleteProfile();
    if( response ){
      setMessagePopup("Perfil excluído com sucesso");
      setShowPopup(true);
    }
  };

  return (
    <Wrapper>
      <Header />
      {error && <Error>{error.error}</Error>}
      {showPopup && (
        <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
      )}
      <FieldWrapper>
        <TextSld>Perfil</TextSld>
        <InputDatePicker
          label="Data de nascimento"
          value={birthDate}
          setValue={setBirthDate}
        />
        <Input
          type="number"
          id="weight"
          label="Peso"
          value={weight}
          setValue={setWeight}
        />
        <Select
          id="sex"
          label="Sexo"
          value={sex}
          setValue={setSex}
          options={options}
        />
        <LineSld>
          <Button label="Salvar" click={handleSave} />
          {profile && <Button label="Excluir" click={handleDelete} />}
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
