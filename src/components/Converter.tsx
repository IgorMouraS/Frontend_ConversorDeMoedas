import React from 'react';
import { useState, Suspense } from 'react';

import { useCurrency } from '../context/CurrencyContext';

import { DropdownComponent } from './DropdownComponent';
import { InputComponent } from './InputComponent';
import { OutputComponent } from './OutputComponent';

const HistoricoConvercaoComponent = React.lazy(
  () => import('./HistoricoConvercaoComponent'),
);

interface ConversionHistory {
  fromCurrency: string;
  toCurrency: string;
  amount: number;
  result: number;
}

export const Converter = () => {
  // const { exchangeRates, currencies } = useContext(CurrencyContext);
  const { currencies, exchangeRates } = useCurrency();
  const [fromCurrency, setFromCurrency] = useState<string>('BRL');
  const [toCurrency, setToCurrency] = useState<string>('BRL');
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [conversionHistory, setConversionHistory] = useState<
    ConversionHistory[]
  >([]);

  const handleConversion = () => {
    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const conversionRate =
        exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      const result = amount * conversionRate;
      setResult(result);

      updateConversionHistory(fromCurrency, toCurrency, amount, result);
    }
  };

  const updateConversionHistory = (
    fromCurrency: string,
    toCurrency: string,
    amount: number,
    result: number,
  ) => {
    setConversionHistory((prevHistory) => {
      const newHistory = [
        ...prevHistory,
        { fromCurrency, toCurrency, amount, result },
      ];
      if (newHistory.length > 5) {
        newHistory.shift(); // Remove a conversão mais antiga se o limite de 5 for atingido
      }
      return newHistory;
    });
  };

  return (
    <>
      <DropdownComponent
        labelOrigem="Moeda Origem"
        valueOrigem={fromCurrency}
        onChangeOrigem={setFromCurrency}
        optionsOrigem={currencies}
        labelDestino="Moeda Destino"
        valueDestino={toCurrency}
        onChangeDestino={setToCurrency}
        optionsDestino={currencies}
      />
      <InputComponent
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button type="button" onClick={handleConversion}>
        Converter
      </button>
      <OutputComponent result={result} />
      <Suspense fallback={<div>Loading...</div>}>
        <HistoricoConvercaoComponent history={conversionHistory} />
      </Suspense>
    </>
  );
};
