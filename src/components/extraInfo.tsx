// Bibliotecas externas
import React from 'react';

// Arquivos de estilo
import { Container, Texto } from '../styles/ExtraInfo.style';

// Contexto
import { useMoeda } from '../context/moedaContext';

export const ExtraInfo: React.FC = () => {
  const { ultimaAtualizacao, ultimaVerificacao } = useMoeda();
  return (
    <>
      <hr />
      <Container>
        <Texto>Última Busca de Taxas: {ultimaVerificacao || '-'}</Texto>
        <Texto>Última Atualização de Taxas: {ultimaAtualizacao || '-'}</Texto>
      </Container>
    </>
  );
};

export default ExtraInfo;
