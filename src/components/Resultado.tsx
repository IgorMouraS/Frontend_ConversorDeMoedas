// Bibliotecas externas
import React from 'react';

// Arquivos de estilo
import { Input } from '../styles/resultado.style';

interface ResultadoProps {
  valor: number;
}

export const Resultado: React.FC<ResultadoProps> = ({ valor }) => {
  const formatValor = Number.isFinite(valor) ? valor.toFixed(2) : '0.00';

  return (
    <Input
      type="number"
      value={formatValor !== null ? `${valor.toFixed(2)}` : '0.00'}
      readOnly
    />
  );
};
