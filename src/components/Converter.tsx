import { useEffect, useState } from 'react';
import { fetchTaxaDeMoedas } from '../services/exchangeService';
import { Input, Output, DropdownContainer } from '../styles/home.styles';

import { DropdownBtn } from './DropdownBtn';

export const Converter = () => {
  // const { exchangeRates, currencies } = useContext(CurrencyContext);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>(
    {},
  );
  const [fromCurrency, setFromCurrency] = useState<string>('Moeda Origem');
  const [toCurrency, setToCurrency] = useState<string>('Moeda Destino');
  const [amount, setAmount] = useState<number>(0);
  const [result, setResult] = useState<number | null>(null);
  const [conversionHistory, setConversionHistory] = useState<
    {
      fromCurrency: string;
      toCurrency: string;
      amount: number;
      result: number;
    }[]
  >([]);

  const handleConversion = () => {
    if (exchangeRates[fromCurrency] && exchangeRates[toCurrency]) {
      const conversionRate =
        exchangeRates[toCurrency] / exchangeRates[fromCurrency];
      setResult(amount * conversionRate);

      setConversionHistory((prevHistory) => {
        const newHistory = [
          ...prevHistory,
          { fromCurrency, toCurrency, amount, result: amount * conversionRate },
        ];
        if (newHistory.length > 5) {
          newHistory.shift(); // Remove a conversão mais antiga se o limite de 5 for atingido
        }
        return newHistory;
      });
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const storedData = localStorage.getItem('moedasTypes');
      if (!storedData) {
        const data = await fetchTaxaDeMoedas('BRL');
        localStorage.setItem(
          'moedasTypes',
          JSON.stringify(data.conversion_rates),
        );
        const moedasList = Object.keys(data.conversion_rates);
        setCurrencies(moedasList);
        setExchangeRates(data.conversion_rates);
        console.log('moedasList: ', moedasList);
      } else {
        const moedasList = JSON.parse(storedData);
        setCurrencies(Object.keys(moedasList));
        setExchangeRates(moedasList);
        console.log('moedasList: ', moedasList);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <DropdownContainer>
        <DropdownBtn
          label="Moeda Origem"
          value={fromCurrency}
          onChange={setFromCurrency}
          options={currencies}
        />
        <DropdownBtn
          label="Moeda Destino"
          value={toCurrency}
          onChange={setToCurrency}
          options={currencies}
        />
      </DropdownContainer>
      <Input
        type="number"
        placeholder="Digite o valor"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
      />
      <button type="button" onClick={handleConversion}>
        Converter
      </button>
      <Output>
        {result !== null ? `Resultado: ${result.toFixed(2)}` : 'Resultado'}
      </Output>

      <div>
        <h2>Histórico de Conversões:</h2>
        <ul>
          {conversionHistory.map((conversion, index) => (
            <li key={index}>
              {conversion.amount} {conversion.fromCurrency} ={' '}
              {conversion.result.toFixed(2)} {conversion.toCurrency}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
