import React from 'react';

import { Input } from '../styles/home.styles';

interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputComponent: React.FC<InputProps> = ({ value, onChange }) => (
  <Input
    type="number"
    value={value}
    onChange={onChange}
    placeholder="Digite o valor"
  />
);
