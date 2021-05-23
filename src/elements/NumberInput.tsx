import React, { ChangeEvent, useState } from "react";
import isInteger from "lodash/isInteger";
import styled from "styled-components";

interface INumberInput {
  name: string;
  value: string;
  onChange: (value: string) => void;
  onError: (input: { [key: string]: boolean }) => void;
  width?: string;
  label: string;
}

const Label = styled.span`
  margin-bottom: 0.25rem;
`;

const StyledInput = styled.input`
  width: 5rem;
`;

const Error = styled.span`
  color: #ffa76c;
  margin-top: 0.25rem;
`;

const Wrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "10rem"};
  display: flex;
  flex-direction: column;
  height: 6.5rem;
`;

const NumberInput = ({
  name,
  value,
  onChange,
  onError,
  width,
  label,
}: INumberInput) => {
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    if (!isInteger(Number(newValue)) || Number(newValue) < 1) {
      setError(true);
      onError({ [name]: true });
    } else {
      setError(false);
      onError({ [name]: false });
    }
  };

  return (
    <Wrapper width={width}>
      <Label>{label}</Label>
      <StyledInput type="number" value={value} onChange={handleChange} />
      {error && <Error>Invalid!</Error>}
    </Wrapper>
  );
};

export default NumberInput;
