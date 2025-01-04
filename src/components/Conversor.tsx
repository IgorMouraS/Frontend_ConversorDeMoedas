// External libraries
import React, { useState } from 'react';

// Contexto
import { useCurrency } from '../context/CurrencyContext';
import { useHistory } from '../context/HistoryContext';

// Style files
import { Container } from '../styles/conversor.style';

// Components
import { ConversionPanel } from './ConversionPanel';

export const Converter: React.FC = () => {
  const { currencies, exchangeRates } = useCurrency();
  const { setHistory } = useHistory();
  const [fromCurrency, setFromCurrency] = useState<string>('BRL');
  const [toCurrency, setToCurrency] = useState<string>('USD');
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number>(0);
  const [error, setError] = useState<boolean>(false);

  const convert = () => {
    if (amount <= 0 || isNaN(amount)) {
      setError(true);
      return;
    }

    setError(false);

    if (
      exchangeRates[fromCurrency] &&
      exchangeRates[toCurrency] &&
      Number(amount) > 0
    ) {
      const conversionRate =
        exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      const result = Number(amount) * conversionRate;
      setResult(result);

      updateHistory(fromCurrency, toCurrency, amount.toFixed(2), result);
    }
  };

  const updateHistory = (
    fromCurrency: string,
    toCurrency: string,
    amount: string,
    result: number,
  ) => {
    setHistory((previousHistory) => {
      const newHistory = [
        ...previousHistory,
        { fromCurrency, toCurrency, amount, result },
      ];
      if (newHistory.length > 5) {
        newHistory.shift();
      }
      return newHistory;
    });
  };

  return (
    <>
      <Container>
        <ConversionPanel
          fromValue={fromCurrency}
          setFromValue={setFromCurrency}
          toValue={toCurrency}
          setToValue={setToCurrency}
          inputValue={amount}
          setInputValue={setAmount}
          result={result}
          currencies={currencies}
          convert={convert}
          error={error}
        />
      </Container>
    </>
  );
};
