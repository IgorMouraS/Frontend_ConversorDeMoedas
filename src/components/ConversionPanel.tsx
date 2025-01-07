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
import { Container as ContainerPanel } from '../styles/conversor.style';

// Context
import { useCurrency } from '../context/CurrencyContext';
import { useConversion } from '../context/ConversionContext';

// interfaces
import {
  InputProps,
  ResultProps,
  CurrencySelectorProps,
  ConvertButtonProps,
  FieldProps,
  ErrorMessageProps,
} from '../interfaces/ConversionPanelInterfaces';

export const ConversionPanel: React.FC & {
  InputValue: React.FC<InputProps>;
  Result: React.FC<ResultProps>;
  CurrencySelector: React.FC<CurrencySelectorProps>;
  ConvertButton: React.FC<ConvertButtonProps>;
  Field: React.FC<FieldProps>;
  ErrorMessage: React.FC<ErrorMessageProps>;
} = () => {
  const { currencies } = useCurrency();
  const {
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    amount,
    setAmount,
    result,
    error,
    convert,
  } = useConversion();

  return (
    <>
      <ContainerPanel>
        <ErrorContainer>
          <Container>
            <ConversionPanel.Field
              error={error}
              value={fromCurrency}
              setValue={setFromCurrency}
              currencies={currencies}
            >
              <ConversionPanel.InputValue
                value={Number(amount)}
                onChange={(e) => setAmount(Number(e.target.value))}
              />
            </ConversionPanel.Field>
            <ConversionPanel.ConvertButton convert={convert} />
            <ConversionPanel.Field
              error={false}
              value={toCurrency}
              setValue={setToCurrency}
              currencies={currencies}
            >
              <ConversionPanel.Result value={result} />
            </ConversionPanel.Field>
          </Container>
          <ConversionPanel.ErrorMessage error={error} />
        </ErrorContainer>
      </ContainerPanel>
    </>
  );
};

// Children component

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
  return (
    <Select value={value} onChange={(e) => setValue(e.target.value)}>
      {currencies.map((moeda) => (
        <Option key={moeda} value={moeda}>
          {moeda}
        </Option>
      ))}
    </Select>
  );
};

ConversionPanel.ConvertButton = ({ convert }: ConvertButtonProps) => {
  return (
    <Button onClick={convert}>
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
  return (
    <ConversionField $error={error}>
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
  return (
    <>
      {error && <ErrorText>Por favor, verifique o valor inserido.</ErrorText>}
    </>
  );
};
