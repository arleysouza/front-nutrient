import styled from "styled-components";
import InputSearch from "./InputSearch";
import ListFood from "./ListFood";

export default function FoodPane() {
  return (
    <Wrapper>
        <InputSearch placeholder="Pesquise um alimento" />
        <ListFood />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 8px;
  border-radius: 5px;
  
  width: 500px;
  min-width: 500px;
  box-sizing: border-box;
  background-color: #52c991;
  color: #fff;
  margin-right: 20px;

  @media (max-width: 1100px) {
    align-self: center;
    margin-top: 20px;
    margin-right: 0px;
  }
`;
