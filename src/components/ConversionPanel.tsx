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

// Context
import { useTheme } from '../context/ThemeContext';

// Components
import { InputValue } from './InputValue';
import { Result } from './Result';

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

export const ConversionPanel: React.FC<ConversionPanelProps> = ({
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
  const { theme } = useTheme();
  return (
    <>
      <ErrorContainer>
        <Container>
          <ConversionField $error={error} className={theme ? 'dark' : ''}>
            <InputValue
              value={Number(inputValue)}
              onChange={(e) => setInputValue(Number(e.target.value))}
            />
            <Select
              className={theme ? 'dark' : ''}
              value={fromValue}
              onChange={(e) => setFromValue(e.target.value)}
            >
              {currencies.map((moeda) => (
                <Option
                  className={theme ? 'dark' : ''}
                  key={moeda}
                  value={moeda}
                >
                  {moeda}
                </Option>
              ))}
            </Select>
          </ConversionField>
          <Button onClick={convert} className={theme ? 'dark' : ''}>
            <Text>convert</Text>
            <Icon>
              <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>
            </Icon>
          </Button>
          <ConversionField className={theme ? 'dark' : ''} $error={false}>
            <Result value={result} />
            <Select
              className={theme ? 'dark' : ''}
              value={toValue}
              onChange={(e) => setToValue(e.target.value)}
            >
              {currencies.map((moeda) => (
                <Option
                  className={theme ? 'dark' : ''}
                  key={moeda}
                  value={moeda}
                >
                  {moeda}
                </Option>
              ))}
            </Select>
          </ConversionField>
        </Container>
        {error && (
          <ErrorText className={theme ? 'dark' : ''}>
            Por favor, verifique o valor inserido.
          </ErrorText>
        )}
      </ErrorContainer>
    </>
  );
};
