import styled from "styled-components";
import { Error, Header, FoodPane, NutrientPane } from "../components";
import { useFood } from "../hooks";

export default function FoodPage() {
  const { error, food } = useFood();

  return (
    <WrapperSld>
      <Header />
      {error && <Error>{error.error}</Error>}
      <BodySld>
        <FoodPane />
        {food && <NutrientPane />}
      </BodySld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
`;

const BodySld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center; /* centraliza na horizontal quando a direção é row */
  box-sizing: border-box;
  margin: 30px 0px;
  min-width: 530px;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center; /* centraliza na horizontal quando a direção é column */
  }
`;
