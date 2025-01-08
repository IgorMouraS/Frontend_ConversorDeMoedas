// External libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

// Style files
import {
  Container_S,
  ConversionField_S,
  Select_S,
  Option_S,
  Text_S,
  Icon_S,
  ErrorContainer_S,
  ErrorText_S,
  Button_S,
  ContainerPanel_S,
  Input_S,
  InputResult_S,
} from './ConversionPanel.style';

// hooks
import { useCurrency } from '../../hooks/useCurrency';
import { useConversion } from '../../hooks/useConversion';

// interfaces
import {
  Input_I,
  Result_I,
  CurrencySelector_I,
  ConvertButton_I,
  Field_I,
  ErrorMessage_I,
} from './ConversionPanel.interfaces';

export const ConversionPanel: React.FC & {
  InputValue: React.FC<Input_I>;
  Result: React.FC<Result_I>;
  CurrencySelector: React.FC<CurrencySelector_I>;
  ConvertButton: React.FC<ConvertButton_I>;
  Field: React.FC<Field_I>;
  ErrorMessage: React.FC<ErrorMessage_I>;
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
      <ContainerPanel_S>
        <ErrorContainer_S>
          <Container_S>
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
          </Container_S>
          <ConversionPanel.ErrorMessage error={error} />
        </ErrorContainer_S>
      </ContainerPanel_S>
    </>
  );
};

// Children component

ConversionPanel.InputValue = ({ value, onChange }: Input_I) => {
  return (
    <Input_S
      type="number"
      value={value === 0 ? '' : value}
      onChange={onChange}
      placeholder="Digite o valor"
    />
  );
};

ConversionPanel.Result = ({ value }: Result_I) => {
  const formattedValue = Number.isFinite(value) ? value.toFixed(2) : '0.00';

  return <InputResult_S type="number" value={formattedValue} readOnly />;
};

ConversionPanel.CurrencySelector = ({
  value,
  setValue,
  currencies,
}: CurrencySelector_I) => {
  return (
    <Select_S value={value} onChange={(e) => setValue(e.target.value)}>
      {currencies.map((moeda) => (
        <Option_S key={moeda} value={moeda}>
          {moeda}
        </Option_S>
      ))}
    </Select_S>
  );
};

ConversionPanel.ConvertButton = ({ convert }: ConvertButton_I) => {
  return (
    <Button_S onClick={convert}>
      <Text_S>convert</Text_S>
      <Icon_S>
        <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>
      </Icon_S>
    </Button_S>
  );
};

ConversionPanel.Field = ({
  error,
  children,
  value,
  setValue,
  currencies,
}: Field_I) => {
  return (
    <ConversionField_S $error={error}>
      {children}
      <ConversionPanel.CurrencySelector
        value={value}
        setValue={setValue}
        currencies={currencies}
      />
    </ConversionField_S>
  );
};

ConversionPanel.ErrorMessage = ({ error }: ErrorMessage_I) => {
  return (
    <>
      {error && (
        <ErrorText_S>Por favor, verifique o valor inserido.</ErrorText_S>
      )}
    </>
  );
};
