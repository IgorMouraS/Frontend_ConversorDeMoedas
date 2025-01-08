// External libraries
import React from 'react';

// Style files
import {
  Container_S,
  CurrencyPanel_S,
  Currency_S,
  Title_S,
  Rate_S,
} from './RatesPanel.style';

// hooks
import { useCurrency } from '../../hooks/useCurrency';

const RatesPanel: React.FC = () => {
  const { currencies, exchangeRates } = useCurrency();

  return (
    <Container_S>
      <CurrencyPanel_S>
        {currencies.map((currency) => (
          <Currency_S key={currency}>
            <Title_S>{currency}</Title_S>
            <Rate_S>
              {exchangeRates?.[currency]
                ? `R$${(1 / exchangeRates[currency]).toFixed(2)}`
                : 'N/A'}
            </Rate_S>
          </Currency_S>
        ))}
      </CurrencyPanel_S>
    </Container_S>
  );
};

export default RatesPanel;
