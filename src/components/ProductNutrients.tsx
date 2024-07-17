import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ProductNutrientsProps } from "../types";
import Button from "./Button";

interface Props {
  product: ProductNutrientsProps;
  setMessagePopup: (value: string) => void;
  setShowPopup: (value: boolean) => void;
  handleSave: (value: ProductNutrientsProps) => Promise<void>;
  handleDelete: (id: string) => Promise<void>;
}

export default function ProductNutrients({
  product,
  handleSave,
  handleDelete,
}: Props) {
  const [productDetails, setProductDetails] =
    useState<ProductNutrientsProps>(product);

  useEffect(() => {
    setProductDetails(product);
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <Wrapper>
      <InputWrapper>
        <LabelSld htmlFor="description">Descrição</LabelSld>
        <InputSld
          type="text"
          id="description"
          name="description"
          value={productDetails.description || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="serving_size">Porção</LabelSld>
        <InputSld
          type="number"
          id="serving_size"
          name="serving_size"
          value={productDetails.serving_size || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="serving_size_unit">
          Unidade de medida da porção
        </LabelSld>
        <InputSld
          type="text"
          id="serving_size_unit"
          name="serving_size_unit"
          placeholder="g, mg, ml, ..."
          value={productDetails.serving_size_unit || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="quantity_per_serving">
          Quantidade de unidades por porção
        </LabelSld>
        <InputSld
          type="number"
          id="quantity_per_serving"
          name="quantity_per_serving"
          value={productDetails.quantity_per_serving || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="quantity_per_serving_unit">
          Quantidade de unidades por porção
        </LabelSld>
        <InputSld
          type="text"
          id="quantity_per_serving_unit"
          name="quantity_per_serving_unit"
          placeholder="colheres, biscoitos, ..."
          value={productDetails.quantity_per_serving_unit || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="energy">Calorias</LabelSld>
        <InputSld
          type="number"
          id="energy"
          name="energy"
          placeholder="em kcal"
          value={productDetails.energy || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="protein">Proteína</LabelSld>
        <InputSld
          type="number"
          id="protein"
          name="protein"
          value={productDetails.protein || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="carbohydrate">Carboidratos</LabelSld>
        <InputSld
          type="number"
          id="carbohydrate"
          name="carbohydrate"
          value={productDetails.carbohydrate || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="carbohydrate">Açúcar</LabelSld>
        <InputSld
          type="number"
          id="sugar"
          name="sugar"
          value={productDetails.sugar || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="dietary_fiber">Fibra alimentar</LabelSld>
        <InputSld
          type="number"
          id="dietary_fiber"
          name="dietary_fiber"
          value={productDetails.dietary_fiber || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="total_fat">Gorduras totais</LabelSld>
        <InputSld
          type="number"
          id="total_fat"
          name="total_fat"
          value={productDetails.total_fat || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="saturated_fat">Gorduras saturadas</LabelSld>
        <InputSld
          type="number"
          id="saturated_fat"
          name="saturated_fat"
          value={productDetails.saturated_fat || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="saturated_fat">Gorduras trans</LabelSld>
        <InputSld
          type="number"
          id="trans_fat"
          name="trans_fat"
          value={productDetails.trans_fat || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="calcium">Cálcio</LabelSld>
        <InputSld
          type="number"
          id="calcium"
          name="calcium"
          value={productDetails.calcium || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <InputWrapper>
        <LabelSld htmlFor="sodium">Sódio</LabelSld>
        <InputSld
          type="number"
          id="sodium"
          name="sodium"
          value={productDetails.sodium || ""}
          onChange={handleChange}
        />
      </InputWrapper>
      <LineSld>
        <Button label="Salvar" click={() => handleSave(productDetails)} />
        {productDetails.id && (
          <Button
            label="Excluir"
            click={() => handleDelete(productDetails.id)}
          />
        )}
      </LineSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-top: 5px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

const LabelSld = styled.label`
  color: #333;
  margin-bottom: 5px;
`;

const InputSld = styled.input`
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 8px;
  color: rgb(27, 71, 153);
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
`;

const LineSld = styled.div`
  display: flex;
  margin-top: 10px;
`;
