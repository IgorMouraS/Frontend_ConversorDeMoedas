import React from 'react';

import { Dropdown, DropdownContainer } from '../styles/home.styles';

interface DropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export const DropdownBtn: React.FC<DropdownProps> = ({
  label,
  value,
  onChange,
  options,
}) => (
  <DropdownContainer>
    <label>{label}</label>
    <Dropdown value={value} onChange={(e) => onChange(e.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Dropdown>
  </DropdownContainer>
);
