import React, { useState } from "react";
import styled from "styled-components";

interface IDropdown {
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
  onError: (input: { [key: string]: boolean }) => void;
  width?: string;
  label: string;
  name: string;
}

const Wrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => width || "10rem"};
  display: flex;
  flex-direction: column;
  height: 6.5rem;
`;

const Label = styled.span`
  margin-bottom: 0.4rem;
`;

const Error = styled.span`
  color: #ffa76c;
  margin-top: 0.25rem;
`;

const Dropdown = ({
  name,
  value,
  onChange,
  onError,
  width,
  label,
  options,
}: IDropdown) => {
  const [error, setError] = useState(false);

  const handleChange = (event: any) => {
    const newValue = event.target.value;
    onChange(newValue);
    if (newValue === "") {
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
      <select onChange={handleChange}>
        <option value="" selected={value === ""}>
          ---
        </option>
        {options.map((option) => (
          <option
            value={option.value}
            selected={option.value === value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {error && <Error>Required!</Error>}
    </Wrapper>
  );
};

export default Dropdown;
