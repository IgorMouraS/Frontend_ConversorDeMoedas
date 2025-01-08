export interface ConversionContext_I {
  fromCurrency: string;
  setFromCurrency: (value: string) => void;
  toCurrency: string;
  setToCurrency: (value: string) => void;
  amount: number;
  setAmount: (value: number) => void;
  result: number;
  error: boolean;
  convert: () => void;
}
