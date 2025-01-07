// External libraries
import React, { Suspense } from 'react';

// Style files
import {
  GlobalStyle,
  HomeContainer,
  Container,
  TitleAndFeatures,
  Title,
  BodyContainer,
  FooterContainer,
  RatesPanelContainer,
} from '../styles/home.style';

// Context
import { ConversionProvider } from '../context/ConversionContext';
import { CurrencyProvider } from '../context/CurrencyContext';
import { HistoryProvider } from '../context/HistoryContext';
import { ThemeProvider } from '../context/ThemeContext';

// Components
import { ConversionPanel } from '../components/ConversionPanel';
const RatesPanel = React.lazy(() => import('../components/RatesPanel'));
const HeaderButtons = React.lazy(() => import('../components/HeaderButtons'));
const ExtraInfo = React.lazy(() => import('../components/extraInfo'));

function Home() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <HomeContainer>
          <CurrencyProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <RatesPanelContainer>
                <RatesPanel />
              </RatesPanelContainer>
            </Suspense>
            <Container>
              <HistoryProvider>
                <TitleAndFeatures>
                  <Suspense fallback={<div>Loading...</div>}>
                    <HeaderButtons />
                  </Suspense>
                  <Title>Conversor de Moedas</Title>
                </TitleAndFeatures>
                <BodyContainer>
                  <ConversionProvider>
                    <ConversionPanel />
                  </ConversionProvider>
                </BodyContainer>
              </HistoryProvider>
            </Container>
            <Suspense fallback={<div>Loading...</div>}>
              <FooterContainer>
                <ExtraInfo />
              </FooterContainer>
            </Suspense>
          </CurrencyProvider>
        </HomeContainer>
      </ThemeProvider>
    </>
  );
}

export default Home;
