import styled from "styled-components";
import { ProductNutrientsProps } from "../types";
import { useState } from "react";
import ProductNutrients from "./ProductNutrients";
import { useProduct } from "../hooks";
import Button from "./Button";
import ProductSearch from "./ProductSearch";

interface Props {
  label: string;
  products: ProductNutrientsProps[];
  setMessagePopup: (value: string) => void;
  setShowPopup: (value: boolean) => void;
}

export default function ScrollableProductList({
  label,
  products,
  setMessagePopup,
  setShowPopup,
}: Props) {
  const [selectedProduct, setSelectedProduct] =
    useState<ProductNutrientsProps | null>(null);
  const { create, update, remove, setError } = useProduct();

  const handleSave = async (product: ProductNutrientsProps) => {
    
      if (
        product.description === null ||
        product.description.trim().length === 0
      ) {
        setError({ error: "Forneça a descrição do produto" });
      } else if (product.serving_size === null) {
        setError({ error: "Forneça o peso/volume de cada porção" });
      } else if (
        product.serving_size_unit === null ||
        product.serving_size_unit.trim().length === 0
      ) {
        setError({
          error:
            "Forneça a unidade de medida de cada porção, por exemplo, g (gramas)",
        });
      } else if ( product.quantity_per_serving === null ) {
        setError({ error:"Forneça a quantidade de unidades por porção, por exemplo, 3 biscoitos" });
      } else if (
        product.quantity_per_serving_unit === null ||
        product.quantity_per_serving_unit.trim().length === 0
      ) {
        setError({
          error:
            "Forneça a unidade usada por porção, por exemplo, biscoitos e colheres",
        });
      }else {
        if (!product.id) {
          const response = await create(
            product.description,
            product.serving_size,
            product.serving_size_unit,
            product.quantity_per_serving,
            product.quantity_per_serving_unit,
            product.energy,
            product.protein,
            product.carbohydrate,
            product.sugar,
            product.dietary_fiber,
            product.total_fat,
            product.saturated_fat,
            product.trans_fat,
            product.calcium,
            product.sodium
          );
          if (response) {
            setMessagePopup("Produto criado com sucesso");
            setShowPopup(true);
          }
        } else {
          const response = await update(
            product.id,
            product.description,
            product.serving_size,
            product.serving_size_unit,
            product.quantity_per_serving,
            product.quantity_per_serving_unit,
            product.energy,
            product.protein,
            product.carbohydrate,
            product.sugar,
            product.dietary_fiber,
            product.total_fat,
            product.saturated_fat,
            product.trans_fat,
            product.calcium,
            product.sodium
          );
          if (response) {
            setMessagePopup("Produto atualizado com sucesso");
            setShowPopup(true);
          }
        }
      }
   
  };

  const handleDelete = async (id: string) => {
    const response = await remove(id);
    if (response) {
      if (id === selectedProduct?.id) {
        setSelectedProduct(null);
      }
      setMessagePopup("Produto excluído com sucesso");
      setShowPopup(true);
    }
  };

  const handleCreate = async () => {
    const newProduct = () =>
      ({
        id: "",
        description: "",
        serving_size: 0,
        serving_size_unit: "",
        quantity_per_serving: 0,
        quantity_per_serving_unit: "",
        energy: null,
        protein: null,
        carbohydrate: null,
        sugar: null,
        dietary_fiber: null,
        total_fat: null,
        saturated_fat: null,
        trans_fat: null,
        calcium: null,
        sodium: null,
      } as ProductNutrientsProps);

    setError(null);
    setSelectedProduct(newProduct);
  };

  return (
    <Wrapper>
      <ProductsSld>
        <LabelSld>{label}</LabelSld>
        <ListSld>
          {products.map((product: ProductNutrientsProps) => (
            <ItemSld
              key={product.id}
              onClick={() => {
                setError(null);
                setSelectedProduct(product);
              }}
            >
              {product.description}
            </ItemSld>
          ))}
        </ListSld>
        <LineSld>
          <Button label="Novo produto" click={handleCreate} />
        </LineSld>

        <ProductSearch setSelectedProduct={setSelectedProduct} />
      </ProductsSld>
      {selectedProduct && (
        <ProductNutrients
          product={selectedProduct}
          setMessagePopup={setMessagePopup}
          setShowPopup={setShowPopup}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
      )}
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
  width: 350px;
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

const LineSld = styled.div`
  display: flex;
  margin-top: 10px;
`;
