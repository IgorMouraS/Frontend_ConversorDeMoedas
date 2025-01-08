// Context for the currency of the application, setting it globally

// External libraries
import React, { createContext, useContext } from 'react';

// hooks
import { useCurrency } from '../../hooks/useCurrency';

// interfaces
import { CurrencyContext_I, CurrencyProvider_I } from './Currency.interfaces';

const CurrencyContext = createContext<CurrencyContext_I | null>(null);

export const CurrencyProvider: React.FC<CurrencyProvider_I> = ({
  children,
}) => {
  const currency = useCurrency();

  return (
    <CurrencyContext.Provider value={currency}>
      {children}
    </CurrencyContext.Provider>
  );
};

// Hook to access the context
export const useCurrencyContext = (): CurrencyContext_I => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
