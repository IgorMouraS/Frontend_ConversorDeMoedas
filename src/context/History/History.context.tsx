// Context to store the history of the conversions

// External libraries
import React, { createContext, useContext, useState } from 'react';

// interfaces
import {
  HistoryInfo_I,
  HistoryContext_I,
  HistoryProvider_I,
} from './History.interfaces';

const HistoryContext = createContext<HistoryContext_I | undefined>(undefined);

export const HistoryProvider: React.FC<HistoryProvider_I> = ({ children }) => {
  const [history, setHistory] = useState<HistoryInfo_I[]>([]);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export const useHistory = () => {
  const context = useContext(HistoryContext);
  if (!context) {
    throw new Error('useHistory must be used within a HistoryProvider');
  }
  return context;
};
