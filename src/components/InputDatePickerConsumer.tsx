import { forwardRef } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import { getYear, getMonth} from "date-fns";
import { ptBR } from "date-fns/locale";

// Registrando a localização para pt-BR
registerLocale("pt-BR", ptBR);

function range(start: number, end: number, step: number = 1): number[] {
  const array = [];
  for (let i = start; i >= end; i -= step) {
    array.push(i);
  }
  return array;
}

export default function InputDatePickerConsumer({ label, value, setValue }: Props) {
  const years = range(getYear(new Date()), getYear(new Date()) - 100);
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const CustomInput = forwardRef(({ value, onClick }: any, ref: any) => (
    <StyledButton onClick={onClick} ref={ref}>
      {value || "Selecione a data"}
    </StyledButton>
  ));
  
  return (
    <Wrapper>
      <LabelSld>{label}</LabelSld>
      <LineSld>
        <DatePickerWrapper>
          <DatePicker
            selected={value}
            onChange={(date) => setValue(date)}
            customInput={<CustomInput />}
            dateFormat="dd/MM/yyyy"
            locale="pt-BR"
            placeholderText="dd/mm/yyyy"
            renderCustomHeader={({
              date,
              changeYear,
              changeMonth,
              decreaseMonth,
              increaseMonth,
              prevMonthButtonDisabled,
              nextMonthButtonDisabled,
            }) => (
              <div
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <button
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                >
                  {"<"}
                </button>
                <select
                  value={getYear(date)}
                  onChange={({ target: { value } }) =>
                    changeYear(Number(value))
                  }
                >
                  {years.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <select
                  value={months[getMonth(date)]}
                  onChange={({ target: { value } }) =>
                    changeMonth(months.indexOf(value))
                  }
                >
                  {months.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>

                <button
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                >
                  {">"}
                </button>
              </div>
            )}
          />
        </DatePickerWrapper>
      </LineSld>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const LabelSld = styled.label`
  display: flex;
  color: #333;
  padding: 0px;
  margin: 5px 0px;
`;

const DatePickerWrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledButton = styled.button`
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: none;
  background-color: white;
  color: rgb(27, 71, 153);
  font-weight: 600;
  font-size: 110%;
  font-family: roboto;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const LineSld = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

interface Props {
  label: string;
  value: Date | null;
  setValue: (date: Date | null) => void;
}
