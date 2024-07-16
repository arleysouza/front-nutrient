import styled from "styled-components";
import { ProductNutrientsProps } from "../types";
import { useState } from "react";
import ProductNutrients from "./ProductNutrients";

interface Props {
  label: string;
  products: ProductNutrientsProps[];
  setMessagePopup: (value:string) => void;
  setShowPopup: (value:boolean) => void;
}

export default function ScrollableProductList({ label, products, setMessagePopup, setShowPopup }: Props) {
  const [selectedProduct, setSelectedProduct] = useState<ProductNutrientsProps | null>(null);
  
  return (
    <Wrapper>
      <ProductsSld>
        <LabelSld>{label}</LabelSld>
        <ListSld>
          {products.map((product: ProductNutrientsProps) => (
            <ItemSld key={product.id} onClick={() => setSelectedProduct(product)}>
              {product.description}
            </ItemSld>
          ))}
        </ListSld>
      </ProductsSld>
      {selectedProduct && <ProductNutrients product={selectedProduct} setMessagePopup={setMessagePopup} setShowPopup={setShowPopup} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  align-items: flex-start;
`;

const ProductsSld = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelSld = styled.label`
  display: flex;
  color: #333;
  padding: 0px;
  margin: 5px 0px;
`;

const ListSld = styled.div`
  max-height: 400px;
  overflow-y: scroll;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
  padding: 5px;
`;

const ItemSld = styled.div`
  padding: 10px;
  border-bottom: 1px solid #eee;
  white-space: nowrap; // texto não quebra em várias linhas
  overflow: hidden; // esconde qualquer texto que ultrapasse o limite da caixa
  text-overflow: ellipsis; // adiciona reticências no final do texto que ultrapassar o limite da caixa
  cursor: pointer; 

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;

