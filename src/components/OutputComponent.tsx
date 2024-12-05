import React from 'react';

import { Output } from '../styles/home.styles';

interface OutputProps {
  result: number | null;
}

export const OutputComponent: React.FC<OutputProps> = ({ result }) => (
  <Output>
    {result !== null ? `Resultado: ${result.toFixed(2)}` : 'Resultado'}
  </Output>
);
