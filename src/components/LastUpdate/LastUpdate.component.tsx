// External libraries
import React from 'react';

// Style files
import { Container_S, Text_S } from './LastUpdate.style';

// hooks
import { useCurrency } from '../../hooks/useCurrency';

export const LastUpdate: React.FC = () => {
  const { lastUpdate, lastCheck } = useCurrency();
  return (
    <>
      <hr />
      <Container_S>
        <Text_S>Última Busca de Taxas: {lastCheck || '-'}</Text_S>
        <Text_S>Última Atualização de Taxas: {lastUpdate || '-'}</Text_S>
      </Container_S>
    </>
  );
};

export default LastUpdate;
