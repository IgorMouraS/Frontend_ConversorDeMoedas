// External libraries
import React from 'react';

// Style files
import { Input } from '../styles/result.style';

interface ResultProps {
  value: number;
}

export const Result: React.FC<ResultProps> = ({ value }) => {
  const formattedValue = Number.isFinite(value) ? value.toFixed(2) : '0.00';

  return (
    <Input
      type="number"
      value={formattedValue !== null ? `${value.toFixed(2)}` : '0.00'}
      readOnly
    />
  );
};
