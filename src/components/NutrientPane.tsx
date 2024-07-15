import styled from "styled-components";
import { useFood } from "../hooks";
import { ValueProps } from "../types";

export default function NutrientPane() {
  const { food } = useFood();

  return (
    <Wrapper>
      <TitleSld>{food?.description}</TitleSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.energy.label}:</LabelSld>
          {formatValue(food?.energy)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.protein.label}:</LabelSld>
          {formatValue(food?.protein)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.carbohydrate.label}:</LabelSld>
          {formatValue(food?.carbohydrate)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.cholesterol.label}:</LabelSld>
          {formatValue(food?.cholesterol)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.lipids.label}:</LabelSld>
          {formatValue(food?.lipids)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.dietary_fiber.label}:</LabelSld>
          {formatValue(food?.dietary_fiber)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.vitamin_c.label}:</LabelSld>
          {formatValue(food?.vitamin_c)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.iron.label}:</LabelSld>
          {formatValue(food?.iron)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.calcium.label}:</LabelSld>
          {formatValue(food?.calcium)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.sodium.label}:</LabelSld>
          {formatValue(food?.sodium)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.magnesium.label}:</LabelSld>
          {formatValue(food?.magnesium)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.potassium.label}:</LabelSld>
          {formatValue(food?.potassium)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.manganese.label}:</LabelSld>
          {formatValue(food?.manganese)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.phosphorus.label}:</LabelSld>
          {formatValue(food?.phosphorus)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.copper.label}:</LabelSld>
          {formatValue(food?.copper)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.zinc.label}:</LabelSld>
          {formatValue(food?.zinc)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.ash.label}:</LabelSld>
          {formatValue(food?.ash)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.retinol.label}:</LabelSld>
          {formatValue(food?.retinol)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.thiamin.label}:</LabelSld>
          {formatValue(food?.thiamin)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.riboflavin.label}:</LabelSld>
          {formatValue(food?.riboflavin)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.pyridoxine.label}:</LabelSld>
          {formatValue(food?.pyridoxine)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.niacin.label}:</LabelSld>
          {formatValue(food?.niacin)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.re.label}:</LabelSld>
          {formatValue(food?.re)}
        </NutrientSld>
        <NutrientSld>
          <LabelSld>{food?.era.label}:</LabelSld>
          {formatValue(food?.era)}
        </NutrientSld>
      </LineSld>

      <LineSld>
        <NutrientSld>
          <LabelSld>{food?.moisture.label}:</LabelSld>
          {formatValue(food?.moisture)}
        </NutrientSld>
      </LineSld>
    </Wrapper>
  );
}

const formatValue = (nutrient: ValueProps | undefined) => {
  if (nutrient && nutrient.value) {
    return (
      <ValueSld>
        {nutrient.value.toString().replace(".", ",")} {nutrient.unit}
      </ValueSld>
    );
  }
  return <ValueSld></ValueSld>
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-width: 500px;
  padding: 10px;
  box-sizing: border-box;
  background-color: #fffefe;
  color: #333;

  @media (max-width: 1100px) {
    margin-top: 20px;
  }
`;

const TitleSld = styled.div`
  display: flex;
  padding: 10px;
  font-weight: bold;
`;

const LabelSld = styled.div`
  display: flex;
  font-size: 80%;
`;

const ValueSld = styled.div`
  display: flex;
`;

const NutrientSld = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 10px;
`;

const LineSld = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 60px;
`;
