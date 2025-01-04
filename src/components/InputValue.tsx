// External libraries
import React /*{ useEffect, useState }*/ from 'react';

// Style files
import { Input } from '../styles/InputValue.style';

interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputValue: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <Input
      type="number"
      value={value === 0 ? '' : value}
      onChange={onChange}
      placeholder="Digite o valor"
    />
  );
};
