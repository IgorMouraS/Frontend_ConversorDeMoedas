// External libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

// Style files
import {
  Container,
  ConversionField,
  Select,
  Option,
  Text,
  Icon,
  ErrorContainer,
  ErrorText,
  Button,
} from '../styles/ConversionPanel.style';
import { Input } from '../styles/InputValue.style';
import { Input as InputResult } from '../styles/result.style';

// Context
import { useTheme } from '../context/ThemeContext';

interface ConversionPanelProps {
  fromValue: string;
  setFromValue: (value: string) => void;
  toValue: string;
  setToValue: (value: string) => void;
  inputValue: number;
  setInputValue: (value: number) => void;
  result: number;
  currencies: string[];
  convert: () => void;
  error: boolean;
}

interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface ResultProps {
  value: number;
}

interface CurrencySelectorProps {
  value: string;
  setValue: (value: string) => void;
  currencies: string[];
}

interface ConvertButtonProps {
  convert: () => void;
}

interface FieldProps {
  error: boolean;
  children: React.ReactNode;
  value: string;
  setValue: (value: string) => void;
  currencies: string[];
}

interface ErrorMessageProps {
  error: boolean;
}

export const ConversionPanel: React.FC<ConversionPanelProps> & {
  InputValue: React.FC<InputProps>;
  Result: React.FC<ResultProps>;
  CurrencySelector: React.FC<CurrencySelectorProps>;
  ConvertButton: React.FC<ConvertButtonProps>;
  Field: React.FC<FieldProps>;
  ErrorMessage: React.FC<ErrorMessageProps>;
} = ({
  fromValue,
  setFromValue,
  toValue,
  setToValue,
  inputValue,
  setInputValue,
  result,
  currencies,
  convert,
  error,
}) => {
  return (
    <>
      <ErrorContainer>
        <Container>
          <ConversionPanel.Field
            error={error}
            value={fromValue}
            setValue={setFromValue}
            currencies={currencies}
          >
            <ConversionPanel.InputValue
              value={Number(inputValue)}
              onChange={(e) => setInputValue(Number(e.target.value))}
            />
          </ConversionPanel.Field>
          <ConversionPanel.ConvertButton convert={convert} />
          <ConversionPanel.Field
            error={false}
            value={toValue}
            setValue={setToValue}
            currencies={currencies}
          >
            <ConversionPanel.Result value={result} />
          </ConversionPanel.Field>
        </Container>
        <ConversionPanel.ErrorMessage error={error} />
      </ErrorContainer>
    </>
  );
};

// component filhos

ConversionPanel.InputValue = ({ value, onChange }: InputProps) => {
  return (
    <Input
      type="number"
      value={value === 0 ? '' : value}
      onChange={onChange}
      placeholder="Digite o valor"
    />
  );
};

ConversionPanel.Result = ({ value }: ResultProps) => {
  const formattedValue = Number.isFinite(value) ? value.toFixed(2) : '0.00';

  return <InputResult type="number" value={formattedValue} readOnly />;
};

ConversionPanel.CurrencySelector = ({
  value,
  setValue,
  currencies,
}: CurrencySelectorProps) => {
  const { theme } = useTheme();
  return (
    <Select
      className={theme ? 'dark' : ''}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
      {currencies.map((moeda) => (
        <Option className={theme ? 'dark' : ''} key={moeda} value={moeda}>
          {moeda}
        </Option>
      ))}
    </Select>
  );
};

ConversionPanel.ConvertButton = ({ convert }: ConvertButtonProps) => {
  const { theme } = useTheme();
  return (
    <Button onClick={convert} className={theme ? 'dark' : ''}>
      <Text>convert</Text>
      <Icon>
        <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>
      </Icon>
    </Button>
  );
};

ConversionPanel.Field = ({
  error,
  children,
  value,
  setValue,
  currencies,
}: FieldProps) => {
  const { theme } = useTheme();
  return (
    <ConversionField $error={error} className={theme ? 'dark' : ''}>
      {children}
      <ConversionPanel.CurrencySelector
        value={value}
        setValue={setValue}
        currencies={currencies}
      />
    </ConversionField>
  );
};

ConversionPanel.ErrorMessage = ({ error }: ErrorMessageProps) => {
  const { theme } = useTheme();
  return (
    <>
      {error && (
        <ErrorText className={theme ? 'dark' : ''}>
          Por favor, verifique o valor inserido.
        </ErrorText>
      )}
    </>
  );
};
