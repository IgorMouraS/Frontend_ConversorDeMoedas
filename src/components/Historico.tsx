import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillTransfer,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

// Arquivos de estilo
import {
  Container,
  Lista,
  Linha,
  IconHistorico,
  IconConversao,
  Button,
} from '../styles/Historico.style';

// Contexto
import { useTema } from '../context/TemaContext';

interface HistoricoProps {
  historico: infoHistorico[];
}

interface infoHistorico {
  moedaOrigem: string;
  moedaDestino: string;
  valor: string;
  resultado: number;
}

const Historico: React.FC<HistoricoProps> = ({ historico }) => {
  const [mostrarHistorico, setMostrarHistorico] = useState<boolean>(false);
  const { isDark } = useTema();

  const alternarHistorico = () => {
    setMostrarHistorico(!mostrarHistorico);
  };

  return (
    <Container>
      <Button onClick={alternarHistorico} className={isDark ? 'dark' : ''}>
        <IconHistorico className={isDark ? 'dark' : ''}>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            style={{ background: 'none', padding: 0 }}
          />
        </IconHistorico>
      </Button>
      {mostrarHistorico && (
        <Lista className={isDark ? 'dark' : ''}>
          {historico.map((item, index) => (
            <Linha className={isDark ? 'dark' : ''} key={index}>
              {item.valor} {item.moedaOrigem}{' '}
              <IconConversao className={isDark ? 'dark' : ''}>
                <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>{' '}
              </IconConversao>
              {item.resultado.toFixed(2)} {item.moedaDestino}
            </Linha>
          ))}
        </Lista>
      )}
    </Container>
  );
};

// Exportação padrão
export default Historico;
