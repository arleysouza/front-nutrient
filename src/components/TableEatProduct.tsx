import { useEat } from "../hooks";
import { EatProductProps } from "../types";
import styled from "styled-components";

interface Props {
  items: EatProductProps[];
}

export default function TableEatProduct({ items }: Props) {
  const { removeProduct } = useEat();

  // Cria as linhas data tabela
  const lines = [];
  for (let i = 0, amount = 0; i < items.length; i++) {
    // calcula o volume ingerido propocionalmente
    amount = items[i].quantity / items[i].quantity_per_serving;
    lines.push(
      <tr key={items[i].id}>
        <td title={items[i].description}>
          <div className="cell-content">{items[i].description}</div>
        </td>
        <td>
          <div className="cell-content">
            {items[i].quantity} {items[i].quantity_per_serving_unit}
          </div>
        </td>
        {/* ! Non-null Assertion Operator: usado para informar ao TS que temos certeza de que o valor não é nulo */}
        <td>
          {items[i].energy !== null
            ? (items[i].energy! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].protein !== null
            ? (items[i].protein! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].carbohydrate !== null
            ? (items[i].carbohydrate! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].sugar !== null
            ? (items[i].sugar! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].dietary_fiber !== null
            ? (items[i].dietary_fiber! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].total_fat !== null
            ? (items[i].total_fat! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].saturated_fat !== null
            ? (items[i].saturated_fat! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].trans_fat !== null
            ? (items[i].trans_fat! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].calcium !== null
            ? (items[i].calcium! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          {items[i].sodium !== null
            ? (items[i].sodium! * amount).toFixed(2).replace(".", ",")
            : ""}
        </td>
        <td>
          <Button onClick={() => removeProduct(items[i].id)}>Excluir</Button>
        </td>
      </tr>
    );
  }

  // Cria as colunas
  const cols = (
    <tr>
      <th>Produto</th>
      <th>Consumo</th>
      <th>Calorias</th>
      <th>Proteína</th>
      <th>Carboidratos</th>
      <th>Açúcar</th>
      <th>Fibra alimentar</th>
      <th>Gorduras totais</th>
      <th>Gorduras saturadas</th>
      <th>Gorduras trans</th>
      <th>Cálcio</th>
      <th>Sódio</th>
      <th>Ação</th>
    </tr>
  );

  return (
    <Wrapper>
      <TableContainer>
        <Table>
          <thead>{cols}</thead>
          <tbody>{lines}</tbody>
        </Table>
      </TableContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: 30px;
`;

const TableContainer = styled.div`
  width: fit-content;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid #ccc;
    padding: 8px;
    text-align: left;
  }

  th {
    background: #f1f1f1;
  }

  td {
    .cell-content {
      max-width: 150px; /* Ensure this matches the description maxWidth if needed */
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

const Button = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  background-color: #f44336;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
