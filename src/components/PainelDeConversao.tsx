// Bibliotecas externas
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTransfer } from '@fortawesome/free-solid-svg-icons';

// Arquivos de estilo
import {
  Container,
  CampoDeConversao,
  Select,
  Option,
  Text,
  IconConverter,
  ErroTexto,
  ErroContainer,
  Button,
} from '../styles/PainelDeConversao.style';

// Contexto
import { useTema } from '../context/TemaContext';

// Componentes
import { ValorDeEntrada } from './ValorDeEntrada';
import { Resultado } from './Resultado';

interface PainelDeConversaoProps {
  valorDeOrigem: string;
  setValorDeOrigem: (value: string) => void;
  valorDeDestino: string;
  setValorDeDestino: (value: string) => void;
  valorInput: number;
  setValorInput: (value: number) => void;
  resultado: number;
  moedas: string[];
  converter: () => void;
  erro: boolean;
}

export const PainelDeConversao: React.FC<PainelDeConversaoProps> = ({
  valorDeOrigem,
  setValorDeOrigem,
  valorDeDestino,
  setValorDeDestino,
  valorInput,
  setValorInput,
  resultado,
  moedas,
  converter,
  erro,
}) => {
  const { isDark } = useTema();
  return (
    <>
      <ErroContainer>
        <Container>
          <CampoDeConversao $erro={erro} className={isDark ? 'dark' : ''}>
            <ValorDeEntrada
              valor={Number(valorInput)}
              onChange={(e) => setValorInput(Number(e.target.value))}
            />
            <Select
              className={isDark ? 'dark' : ''}
              value={valorDeOrigem}
              onChange={(e) => setValorDeOrigem(e.target.value)}
            >
              {moedas.map((moeda) => (
                <Option
                  className={isDark ? 'dark' : ''}
                  key={moeda}
                  value={moeda}
                >
                  {moeda}
                </Option>
              ))}
            </Select>
          </CampoDeConversao>
          <Button onClick={converter} className={isDark ? 'dark' : ''}>
            <Text>CONVERTER</Text>
            <IconConverter>
              <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>
            </IconConverter>
          </Button>
          <CampoDeConversao className={isDark ? 'dark' : ''} $erro={false}>
            <Resultado valor={resultado} />
            <Select
              className={isDark ? 'dark' : ''}
              value={valorDeDestino}
              onChange={(e) => setValorDeDestino(e.target.value)}
            >
              {moedas.map((moeda) => (
                <Option
                  className={isDark ? 'dark' : ''}
                  key={moeda}
                  value={moeda}
                >
                  {moeda}
                </Option>
              ))}
            </Select>
          </CampoDeConversao>
        </Container>
        {erro && (
          <ErroTexto className={isDark ? 'dark' : ''}>
            Por favor, verifique o valor inserido.
          </ErroTexto>
        )}
      </ErroContainer>
    </>
  );
};
