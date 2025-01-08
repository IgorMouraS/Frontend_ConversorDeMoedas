// Hook for managing the currency conversion

// External libraries
import { useState } from 'react';

// Contexto
import { useCurrency } from './useCurrency';
import { useHistory } from '../context/History/History.context';

export const useConversion = () => {
  const { exchangeRates } = useCurrency();
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

  return {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    result,
    error,
    convert,
  };
};
