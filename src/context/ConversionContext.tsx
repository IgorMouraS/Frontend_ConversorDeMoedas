// src/context/ConversionContext.tsx
import React, { createContext, useContext, useState } from 'react';

// Contexto
import { useCurrency } from '../context/CurrencyContext';
import { useHistory } from '../context/HistoryContext';

interface ConversionContextData {
  fromCurrency: string;
  setFromCurrency: (value: string) => void;
  toCurrency: string;
  setToCurrency: (value: string) => void;
  amount: number;
  setAmount: (value: number) => void;
  result: number;
  error: boolean;
  convert: () => void;
}

const ConversionContext = createContext<ConversionContextData | undefined>(
  undefined,
);

export const ConversionProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

  return (
    <ConversionContext.Provider
      value={{
        fromCurrency,
        setFromCurrency,
        toCurrency,
        setToCurrency,
        amount,
        setAmount,
        result,
        error,
        convert,
      }}
    >
      {children}
    </ConversionContext.Provider>
  );
};

export const useConversion = (): ConversionContextData => {
  const context = useContext(ConversionContext);
  if (!context) {
    throw new Error('useConversion must be used within a ConversionProvider');
  }
  return context;
};
