// Bibliotecas externas
import React, { Suspense } from 'react';

// Arquivos de estilo
import {
  GlobalStyle,
  HomeContainer,
  Container,
  TituloEFuncionalidades,
  Title,
  BodyContainer,
  FooterContainer,
  PainelDeTaxasContainer,
} from '../styles/home.style';

// Contexto
import { ProvedorMoeda } from '../context/moedaContext';
import { ProvedorHistorico } from '../context/historicoContext';
import { useTema } from '../context/TemaContext';

// Componentes
import { Conversor } from '../components/Conversor';
const PainelDeTaxas = React.lazy(() => import('../components/PainelDeTaxas'));
const BotoesHeader = React.lazy(() => import('../components/BotoesHeader'));
const ExtraInfo = React.lazy(() => import('../components/extraInfo'));

function Home() {
  const { isDark } = useTema();
  return (
    <>
      <GlobalStyle isDark={isDark} />
      <HomeContainer>
        <ProvedorMoeda>
          <Suspense fallback={<div>Loading...</div>}>
            <PainelDeTaxasContainer>
              <PainelDeTaxas />
            </PainelDeTaxasContainer>
          </Suspense>
          <Container>
            <ProvedorHistorico>
              <TituloEFuncionalidades>
                <Suspense fallback={<div>Loading...</div>}>
                  <BotoesHeader />
                </Suspense>
                <Title className={isDark ? 'dark' : ''}>
                  Conversor de Moedas
                </Title>
              </TituloEFuncionalidades>
              <BodyContainer>
                <Conversor />
              </BodyContainer>
            </ProvedorHistorico>
          </Container>
          <Suspense fallback={<div>Loading...</div>}>
            <FooterContainer className={isDark ? 'dark' : ''}>
              <ExtraInfo />
            </FooterContainer>
          </Suspense>
        </ProvedorMoeda>
      </HomeContainer>
    </>
  );
}

export default Home;
