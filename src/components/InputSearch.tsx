import { useState } from "react";
import styled from "styled-components";
import { useFood } from "../hooks";

export default function InputSearch({ placeholder }: Props) {
  const [text, setText] = useState("");
  const { search, setError, getFoodsByPage } = useFood();

  const handleKeyDown = async (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      try{
        if( text.trim().length > 0 ){
          await search(text.trim());
        }
        else{
          await getFoodsByPage(1);
        }
      }
      catch(e:any){
        setError(e.message);
      }
    }
    return true; // Indica que a resposta será enviada de forma assíncrona
  };

  return (
      <InputSld
        placeholder={placeholder}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
  );
}

const InputSld = styled.input`
  display: flex;
  flex: 1;
  border-radius: 5px;
  border: none;
  padding: 8px;
  margin: 8px;
  color: #555;
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
  box-sizing: border-box;
`;

interface Props {
  placeholder: string;
}
