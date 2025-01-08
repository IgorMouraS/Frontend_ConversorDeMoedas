import { ReactNode } from 'react';

export interface HistoryInfo_I {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  result: number;
}

export interface HistoryContext_I {
  history: HistoryInfo_I[];
  setHistory: React.Dispatch<React.SetStateAction<HistoryInfo_I[]>>;
}

export interface HistoryProvider_I {
  children: ReactNode;
}
