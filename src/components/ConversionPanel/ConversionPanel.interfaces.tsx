export interface Input_I {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface Result_I {
  value: number;
}

export interface CurrencySelector_I {
  value: string;
  setValue: (value: string) => void;
  currencies: string[];
}

export interface ConvertButton_I {
  convert: () => void;
}

export interface Field_I {
  error: boolean;
  children: React.ReactNode;
  value: string;
  setValue: (value: string) => void;
  currencies: string[];
}

export interface ErrorMessage_I {
  error: boolean;
}
