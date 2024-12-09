// Bibliotecas externas
import React from 'react';

// Arquivos de estilo
import {
  Container,
  PainelDeMoedas,
  Moeda,
  Titulo,
  Taxa,
} from '../styles/PainelDeTaxas.style';

// Contexto
import { useMoeda } from '../context/moedaContext';
import { useTema } from '../context/TemaContext';

const PainelDeTaxas: React.FC = () => {
  const { moedas, taxaDeCambio } = useMoeda();
  const { isDark } = useTema();

  return (
    <Container>
      <PainelDeMoedas>
        {moedas.map((moeda) => (
          <Moeda key={moeda}>
            <Titulo className={isDark ? 'dark' : ''}>{moeda}</Titulo>
            <Taxa className={isDark ? 'dark' : ''}>
              {taxaDeCambio?.[moeda]
                ? `R$${(1 / taxaDeCambio[moeda]).toFixed(2)}`
                : 'N/A'}
            </Taxa>
          </Moeda>
        ))}
      </PainelDeMoedas>
    </Container>
  );
};

export default PainelDeTaxas;
