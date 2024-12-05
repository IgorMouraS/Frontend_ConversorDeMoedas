import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchTaxaDeMoedas } from '../services/exchangeService';

interface CurrencyContextType {
  currencies: string[];
  exchangeRates: { [key: string]: number };
  updateRates: () => void;
}

const CurrencyContext = createContext<CurrencyContextType | null>(null);

interface CurrencyProviderProps {
  children: React.ReactNode;
}

export const CurrencyProvider: React.FC<CurrencyProviderProps> = ({
  children,
}) => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>(
    {},
  );

  const updateRates = async () => {
    const storedData = localStorage.getItem('moedasTypes');
    let data;
    if (!storedData) {
      data = await fetchTaxaDeMoedas('BRL');
      localStorage.setItem(
        'moedasTypes',
        JSON.stringify(data.conversion_rates),
      );
    } else {
      data = { conversion_rates: JSON.parse(storedData) };
    }
    const moedasList = Object.keys(data.conversion_rates);
    setCurrencies(moedasList);
    setExchangeRates(data.conversion_rates);
  };

  // Função que compara as taxas atuais com as armazenadas no localStorage
  const checkForUpdates = async () => {
    const storedData = localStorage.getItem('moedasTypes');
    const newData = await fetchTaxaDeMoedas('BRL');

    if (storedData) {
      const storedRates = JSON.parse(storedData);
      const newRates = newData.conversion_rates;

      // Comparar taxas e atualizar somente se necessário
      if (JSON.stringify(storedRates) !== JSON.stringify(newRates)) {
        updateRates(); // Se as taxas forem diferentes, atualize o estado e o localStorage
      }
    } else {
      updateRates(); // Se não houver taxas armazenadas, faça uma atualização inicial
    }
  };

  useEffect(() => {
    checkForUpdates();
    // ATIVAR Somente em produção
    // const interval = setInterval(() => {
    //   checkForUpdates(); // Verificar e atualizar a cada 10 segundos
    // }, 10000); // 10 segundos

    // return () => clearInterval(interval); // Limpar intervalo ao desmontar o componente
  }, []);

  return (
    <CurrencyContext.Provider
      value={{ currencies, exchangeRates, updateRates }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

// Hook para acessar o contexto
export const useCurrency = (): CurrencyContextType => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
