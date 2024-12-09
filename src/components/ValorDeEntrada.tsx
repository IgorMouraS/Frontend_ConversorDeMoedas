// Bibliotecas externas
import React /*{ useEffect, useState }*/ from 'react';

// Arquivos de estilo
import { Input } from '../styles/ValorDeEntrada.style';

interface InputProps {
  valor: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ValorDeEntrada: React.FC<InputProps> = ({ valor, onChange }) => {
  return (
    <Input
      type="number"
      value={valor === 0 ? '' : valor}
      onChange={onChange}
      placeholder="Digite o valor"
    />
  );
};
