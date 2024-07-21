import styled from "styled-components";
import { Error, Header, Button, PopupMessage, InputDatePickerConsumer, Input, TableEatProduct, TableEatFood } from "../components";
import { useEat } from "../hooks";
import { useState } from "react";
import { FoodProps, ProductNutrientsProps } from "../types";
import { dateFormat } from "../utils";

export default function EatPage() {
  const { products, foods, eatProducts, eatFoods, searchFood, searchProduct, error, setError, createProduct, createFood, date, setDate } = useEat();
  const [showPopup, setShowPopup] = useState(false);
  const [messagePopup, setMessagePopup] = useState("");
  const [term, setTerm] = useState("");
  const [selectedFood, setSelectedFood] = useState<FoodProps | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<ProductNutrientsProps | null>(null);
  const [searchType, setSearchType] = useState<string | null>(null);
  //const [date, setDate] = useState<Date | null>(new Date());
  const [quantity, setQuantity] = useState("");

  const handleFood = async () => {
    if (term.trim().length >= 3) {
      const response = await searchFood(term);
      if (response) {
        setMessagePopup("Não existem alimentos que possuem o termo digitado");
        setShowPopup(true);
      } else {
        setSearchType("food");
        setSelectedFood(null);
      }
    }
  };

  const handleProduct = async () => {
    if (term.trim().length >= 3) {
      const response = await searchProduct(term);
      if (response) {
        setMessagePopup("Não existem produtos que possuem o termo digitado");
        setShowPopup(true);
      } else {
        setSearchType("product");
        setSelectedProduct(null);
      }
    }
  };
  
  const handleSave = async () => {
    if( searchType === "product" && selectedProduct ){
      if( !date ){
        setError({error:"Selecione a data"});
      } else if( !quantity || isNaN(parseFloat(quantity)) ){
        setError({error:"Forneça a quantidade consumida"});
      } else if( parseFloat(quantity) <= 0 ){
        setError({error:"A quantidade consumida precisa ser um valor maior que zero"});
      } else { 
        const response = await createProduct(selectedProduct.id, dateFormat(date), parseFloat(quantity));
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true);
        }
      }
    } else if( searchType === "food" && selectedFood ){
      if( !date ){
        setError({error:"Selecione a data"});
      } else if( !quantity || isNaN(parseFloat(quantity)) ){
        setError({error:"Forneça a quantidade consumida"});
      } else if( parseFloat(quantity) <= 0 ){
        setError({error:"A quantidade consumida precisa ser um valor maior que zero"});
      } else { 
        const response = await createFood(selectedFood.id, dateFormat(date), parseFloat(quantity));
        if (response) {
          setMessagePopup("Consumo registrado com sucesso");
          setShowPopup(true);
        }
      }
    } else {
      setError({error:"Selecione um alimento ou produto"});
    }
  };

  let items = null;
  if (searchType === "product") {
    items = products.map((item) => (
      <ItemSld key={item.id} onClick={() => setSelectedProduct(item)} selected={selectedProduct?.id === item.id}>
        {item.description} ({item.quantity_per_serving_unit})
      </ItemSld>
    ));
  } else if (searchType === "food") {
    items = foods.map((item) => (
      <ItemSld key={item.id} onClick={() => setSelectedFood(item)} selected={selectedFood?.id === item.id}>
        {item.description}
      </ItemSld>
    ));
  }

  return (
    <WrapperSld>
      <Header />
      {error && <Error>{error.error}</Error>}
      {showPopup && (
        <PopupMessage message={messagePopup} setShowPopup={setShowPopup} />
      )}
      <BodyWrapper>
        <LineInputSld>
          <LabelSld>Busca alimento ou produto consumido</LabelSld>
          <InputSld
            placeholder="Digite parte do nome do alimento ou produto e clique no botão"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </LineInputSld>
        <LineSld>
          <Button label="Alimento" click={handleFood} />
          <Button label="Produto" click={handleProduct} />
        </LineSld>
        <ItemWrapperSld>{items}</ItemWrapperSld>
        <LineSld>
          <InputDatePickerConsumer
            label="Data de consumo"
            value={date}
            setValue={setDate}
          />
          <SpacerSld />
          <Input
            type="number"
            id="weight"
            label="Quantidade consumida (colheres, unidades, ...)"
            value={quantity}
            setValue={setQuantity}
          />
        </LineSld>
        <LineSld>
          <Button label="Salvar" click={handleSave} />
        </LineSld>
        {eatProducts.length > 0 && <TableEatProduct items={eatProducts} />}
        {eatFoods.length > 0 && <TableEatFood items={eatFoods} />}
      </BodyWrapper>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  box-sizing: border-box;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  padding: 20px;
  margin-top: 20px;
  border: 1px solid #999;
  border-radius: 5px;
  box-sizing: border-box;
  width: 600px;
`;

const LineSld = styled.div`
  display: flex;
  flex-direction: row;
`;

const LineInputSld = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
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

  color: #555;
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
  box-sizing: border-box;
`;

const ItemWrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

interface ItemSldProps {
  selected: boolean;
}

const ItemSld = styled.div<ItemSldProps>`
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

  background-color: ${(props) =>
    props.selected ? "rgb(34, 175, 163)" : "transparent"};
  color: ${(props) =>
    props.selected ? "#fff" : "#000"};
`;

const SpacerSld = styled.div`
  display: flex;
  width: 20px;
`;


