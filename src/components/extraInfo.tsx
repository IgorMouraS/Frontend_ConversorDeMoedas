// External libraries
import React from 'react';

// Style files
import { Container, Text } from '../styles/ExtraInfo.style';

// Context
import { useCurrency } from '../context/CurrencyContext';

export const ExtraInfo: React.FC = () => {
  const { lastUpdate, lastCheck } = useCurrency();
  return (
    <>
      <hr />
      <Container>
        <Text>Última Busca de Taxas: {lastCheck || '-'}</Text>
        <Text>Última Atualização de Taxas: {lastUpdate || '-'}</Text>
      </Container>
    </>
  );
};

export default ExtraInfo;
