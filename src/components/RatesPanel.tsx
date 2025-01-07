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

const RatesPanel: React.FC = () => {
  const { currencies, exchangeRates } = useCurrency();

  return (
    <Container>
      <CurrencyPanel>
        {currencies.map((currency) => (
          <Currency key={currency}>
            <Title>{currency}</Title>
            <Rate>
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
