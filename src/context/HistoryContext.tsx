// External libraries
import React, { createContext, ReactNode, useContext, useState } from 'react';

interface HistoryInfo {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  result: number;
}

interface HistoryContextType {
  history: HistoryInfo[];
  setHistory: React.Dispatch<React.SetStateAction<HistoryInfo[]>>;
}

const HistoryContext = createContext<HistoryContextType | undefined>(undefined);

interface HistoryProviderProps {
  children: ReactNode;
}

export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};

export const HistoryProvider: React.FC<HistoryProviderProps> = ({
  children,
}) => {
  const [history, setHistory] = useState<HistoryInfo[]>([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
