// External libraries
import React from 'react';

// Style files
import {
  Container,
  CurrencyPanel,
  Currency,
  Title,
  Rate,
} from '../styles/RatesPanel.style';

// Context
import { useCurrency } from '../context/CurrencyContext';
import { useTheme } from '../context/ThemeContext';

const RatesPanel: React.FC = () => {
  const { currencies, exchangeRates } = useCurrency();
  const { theme } = useTheme();

  return (
    <Container>
      <CurrencyPanel>
        {currencies.map((currency) => (
          <Currency key={currency}>
            <Title className={theme ? 'dark' : ''}>{currency}</Title>
            <Rate className={theme ? 'dark' : ''}>
              {exchangeRates?.[currency]
                ? `R$${(1 / exchangeRates[currency]).toFixed(2)}`
                : 'N/A'}
            </Rate>
          </Currency>
        ))}
      </CurrencyPanel>
    </Container>
  );
};

export default RatesPanel;
