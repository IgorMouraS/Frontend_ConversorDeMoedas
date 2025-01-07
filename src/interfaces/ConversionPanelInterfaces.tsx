export interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface ResultProps {
  value: number;
}

export interface CurrencySelectorProps {
  value: string;
  setValue: (value: string) => void;
  currencies: string[];
}

export interface ConvertButtonProps {
  convert: () => void;
}

export interface FieldProps {
  error: boolean;
  children: React.ReactNode;
  value: string;
  setValue: (value: string) => void;
  currencies: string[];
}

export interface ErrorMessageProps {
  error: boolean;
}
