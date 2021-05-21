import React, { ChangeEvent, useState } from "react";
import isInteger from "lodash/isInteger";
import styled from "styled-components";

interface INumberInput {
  value: string;
  onChange: (value: string) => void;
  error: any;
  onError: (error: string) => void;
}

const StyledInput = styled.input`
  width: 10rem;
`;

const Wrapper = styled.div``;

const NumberInput = ({ value, onChange, onError }: INumberInput) => {
  const [error, setError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
    if (!isInteger(Number(newValue))) {
      setError(true);
      onError("Must be integer!");
    } else {
      onError("");
    }
  };

  return (
    <Wrapper>
      <StyledInput type="number" value={value} onChange={handleChange} />
    </Wrapper>
  );
};

export default NumberInput;
