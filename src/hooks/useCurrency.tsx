//  Hook for managing the currency exchange rates

// External libraries
import { useState, useEffect } from 'react';
import { format } from 'date-fns';

// Service
import { getExchangeRates } from '../services/exchange.service';

export const useCurrency = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [exchangeRates, setExchangeRates] = useState<{ [key: string]: number }>(
    {},
  );
  const [lastUpdate, setLastUpdate] = useState<string | null>(null);
  const [lastCheck, setLastCheck] = useState<string | null>(null);
  const getCurrentDate = (): string => {
    return format(new Date(), 'dd/MM/yyyy HH:mm:ss');
  };

  // Function to update exchange rates
  const updateRates = async () => {
    const storedData = localStorage.getItem('currencyRates');
    let data;
    if (!storedData || storedData === 'undefined') {
      data = await getExchangeRates('BRL');
      localStorage.setItem(
        'currencyRates',
        JSON.stringify(data.conversion_rates),
      );
    } else {
      data = { conversion_rates: JSON.parse(storedData) };
    }

    setCurrencies(Object.keys(data.conversion_rates));
    setExchangeRates(data.conversion_rates);

    localStorage.setItem('lastUpdateDate', getCurrentDate());
    setLastUpdate(getCurrentDate());
  };

  // Function to check if updates are needed
  const checkForUpdates = async () => {
    const storedData = localStorage.getItem('currencyRates');
    const data = await getExchangeRates('BRL');

    if (!storedData || storedData === 'undefined') {
      await updateRates();
    } else {
      const storedRates = JSON.parse(storedData);

      // Check for differences between stored and new rates
      if (
        JSON.stringify(storedRates) !== JSON.stringify(data.conversion_rates)
      ) {
        await updateRates();
      }

      if (currencies.length === 0 && Object.keys(exchangeRates).length === 0) {
        setCurrencies(Object.keys(storedRates));
        setExchangeRates(storedRates);
      }

      const dtlastUpdate = localStorage.getItem('lastUpdateDate');
      if (!dtlastUpdate || dtlastUpdate === 'undefined') {
        await updateRates();
      } else {
        if (!lastUpdate || lastUpdate != '') {
          setLastUpdate(dtlastUpdate);
        }
      }
    }

    setLastCheck(getCurrentDate());
  };

  useEffect(() => {
    checkForUpdates();
    // ACTIVATE only in production
    const interval = setInterval(() => {
      checkForUpdates();
    }, 86400000);
    return () => clearInterval(interval);
  }, []);

  return {
    currencies,
    exchangeRates,
    updateRates,
    lastUpdate,
    lastCheck,
  };
};
