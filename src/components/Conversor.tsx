// Bibliotecas externas
import React, { useState } from 'react';

// Contexto
import { useMoeda } from '../context/moedaContext';
import { useHistorico } from '../context/historicoContext';

// Arquivos de estilo
import { Container } from '../styles/conversor.style';

// Componentes
import { PainelDeConversao } from './PainelDeConversao';

export const Conversor: React.FC = () => {
  const { moedas, taxaDeCambio } = useMoeda();
  const { setHistorico } = useHistorico();
  const [moedaOrigem, setMoedaOrigem] = useState<string>('BRL');
  const [moedaDestino, setMoedaDestino] = useState<string>('USD');
  const [valor, setValor] = useState<number>(0);
  const [resultado, setResultado] = useState<number>(0);
  const [erro, setErro] = useState<boolean>(false);

  const converter = () => {
    if (valor <= 0 || isNaN(valor)) {
      setErro(true);
      return;
    }

    setErro(false);

    if (
      taxaDeCambio[moedaOrigem] &&
      taxaDeCambio[moedaDestino] &&
      Number(valor) > 0
    ) {
      const taxaDeConversao =
        taxaDeCambio[moedaDestino] / taxaDeCambio[moedaOrigem];
      const resultado = Number(valor) * taxaDeConversao;
      setResultado(resultado);

      atualizaHistorico(moedaOrigem, moedaDestino, valor.toFixed(2), resultado);
    }
  };

  const atualizaHistorico = (
    moedaOrigem: string,
    moedaDestino: string,
    valor: string,
    resultado: number,
  ) => {
    setHistorico((historicosAnteriores) => {
      const novoHistorico = [
        ...historicosAnteriores,
        { moedaOrigem, moedaDestino, valor, resultado },
      ];
      if (novoHistorico.length > 5) {
        novoHistorico.shift();
      }
      return novoHistorico;
    });
  };

  return (
    <>
      <Container>
        <PainelDeConversao
          valorDeOrigem={moedaOrigem}
          setValorDeOrigem={setMoedaOrigem}
          valorDeDestino={moedaDestino}
          setValorDeDestino={setMoedaDestino}
          valorInput={valor}
          setValorInput={setValor}
          resultado={resultado}
          moedas={moedas}
          converter={converter}
          erro={erro}
        />
      </Container>
    </>
  );
};
