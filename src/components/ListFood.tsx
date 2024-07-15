import styled from "styled-components";
import NavigateButton from "./NavigateButton";
import { useFood } from "../hooks";

export default function ListFood() {
  const { pageFoods, getFoodsByPage, getById } = useFood();

  if (!pageFoods || pageFoods.items.length === 0) {
    return <></>;
  }

  // obtém a quantidade de páginas
  const pageTotal = Math.ceil(pageFoods.total / pageFoods.pagesize);

  const lines = pageFoods.items.map((item, index) => (
    <LineSld key={index} onClick={() => getById(item.id)}>
      {item.description}
    </LineSld>
  ));

  return (
    <Wrapper>
      {lines}

      <BottomSld>
        <NavigateButton
          label="<<"
          click={() => getFoodsByPage(1)}
          disabled={pageFoods.page === 1}
        />
        <NavigateButton
          label="<"
          click={() => getFoodsByPage(pageFoods.page - 1)}
          disabled={pageFoods.page === 1}
        />
        <NumberSld>
          {pageFoods.page} | {pageTotal}{" "}
        </NumberSld>
        <NavigateButton
          label=">"
          click={() => getFoodsByPage(pageFoods.page + 1)}
          disabled={pageFoods.page + 1 > pageTotal}
        />
        <NavigateButton
          label=">>"
          click={() => getFoodsByPage(pageTotal)}
          disabled={pageFoods.page + 1 > pageTotal}
        />
      </BottomSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #52c991;
  color: #111;
  width: 100%;
  margin-top: 10px;
  box-sizing: border-box;
`;

const LineSld = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  justify-content: space-between;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    color: #fff;
    background-color: rgb(31, 94, 65);
  }
`;

const BottomSld = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  padding: 10px 10px 5px 10px;
  border-top: 1px solid #F5F5F5;
`;

const NumberSld = styled.div`
  display: flex;
  margin: 0px 10px;
`;
