import React from 'react';

interface Conversion {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  result: number;
}

interface HistoricoConvercaoComponentProps {
  history: Conversion[];
}

const HistoricoConvercaoComponent: React.FC<
  HistoricoConvercaoComponentProps
> = ({ history }) => (
  <div>
    <h2>Histórico de Conversões:</h2>
    <ul>
      {history.map((conversion, index) => (
        <li key={index}>
          {conversion.amount} {conversion.fromCurrency} ={' '}
          {conversion.result.toFixed(2)} {conversion.toCurrency}
        </li>
      ))}
    </ul>
  </div>
);

// Exportação padrão
export default HistoricoConvercaoComponent;
