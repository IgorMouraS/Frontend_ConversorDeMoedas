// src/contexts/CurrencyContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from 'react';
import axios from 'axios';

type CurrencyContextType = {
  rates: Record<string, number>;
  baseCurrency: string;
  setBaseCurrency: (currency: string) => void;
  fetchRates: () => void;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(
  undefined,
);

const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [baseCurrency, setBaseCurrency] = useState<string>('USD');

  // Função para buscar as taxas de câmbio da API
  const fetchRates = async () => {
    try {
      const response = await axios.get(
        `https://api.exchangerate-api.com/v4/latest/${baseCurrency}`,
      );
      setRates(response.data.rates);
      localStorage.setItem(
        'currencyRates',
        JSON.stringify(response.data.rates),
      ); // Cache as taxas de câmbio no localStorage
    } catch (error) {
      console.error('Erro ao buscar as taxas de câmbio', error);
    }
  };

  useEffect(() => {
    const cachedRates = localStorage.getItem('currencyRates');
    if (cachedRates) {
      setRates(JSON.parse(cachedRates));
    } else {
      fetchRates();
    }
  }, [baseCurrency]);

  // Atualizar taxas a cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      fetchRates();
    }, 10000);
    return () => clearInterval(interval);
  }, [baseCurrency]);

  return (
    <CurrencyContext.Provider
      value={{ rates, baseCurrency, setBaseCurrency, fetchRates }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

// Custom Hook para facilitar o acesso ao contexto
const useCurrency = () => {
  const context = React.useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};

export { CurrencyProvider, useCurrency };
