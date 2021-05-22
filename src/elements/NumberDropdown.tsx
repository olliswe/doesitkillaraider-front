import React from "react";

interface IDropdown {
  value: string | number;
  options: { value: string | number; label: string }[];
}

const Dropdown = ({ value, options }: IDropdown) => {
  return (
    <select>
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
  );
};

export default Dropdown;
