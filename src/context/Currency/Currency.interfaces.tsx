export interface CurrencyContext_I {
  currencies: string[];
  exchangeRates: { [key: string]: number };
  updateRates: () => void;
  lastUpdate: string | null;
  lastCheck: string | null;
}

export interface CurrencyProvider_I {
  children: React.ReactNode;
}
