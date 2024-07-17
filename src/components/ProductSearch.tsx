import { useState } from "react";
import styled from "styled-components";
import { useProduct } from "../hooks";
import { isErrorProps } from "../utils";
import { ProductNutrientsProps } from "../types";

interface Props {
  setSelectedProduct: (value:ProductNutrientsProps) => void;
}

export default function ProductSearch({setSelectedProduct}:Props) {
  const [term, setTerm] = useState("");
  const [products, setProducts] = useState<ProductNutrientsProps[]>([]);
  const { setError, search } = useProduct();

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      try {
        if (term.trim().length >= 3) {
          const response = await search(term.trim());
          if (isErrorProps(response)) {
            setError(response);
          } else {
            setProducts(response);
            setError(null);
          }
        }
      } catch (e: any) {
        setError(e.message);
      }
    }
    return true; // Indica que a resposta será enviada de forma assíncrona
  };

  const copy = (product:ProductNutrientsProps) => {
    const object = {...product};
    object.id = ""; // apaga o ID
    return object;
  }

  const items = products.map((item) => (
    <ItemSld key={item.id} onClick={() => setSelectedProduct(copy(item))}>
      {item.description}
    </ItemSld>
  ));

  return (
    <Wrapper>
      <LabelSld>Todos os produtos</LabelSld>
      <InputSld
        placeholder="Digite pelo menos 3 letras e pressione enter"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {items}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const LabelSld = styled.label`
  display: flex;
  color: #333;
  padding: 0px;
  margin: 5px 0px;
`;

const InputSld = styled.input`
  display: flex;
  flex: 1;
  border-radius: 5px;
  border: none;
  padding: 8px;
  margin: 8px 0px;
  color: #555;
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
  box-sizing: border-box;
`;

const ItemSld = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    color: #fff;
    background-color: rgb(245, 149, 59);
  }
`;
