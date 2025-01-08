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
} from './home.style';

// Context
import { ConversionProvider } from '../../context/Conversion/Conversion.context';
import { CurrencyProvider } from '../../context/Currency/Currency.context';
import { HistoryProvider } from '../../context/History/History.context';
import { ThemeProvider } from '../../context/Theme/Theme.context';

// Components
import { ConversionPanel } from '../../components/ConversionPanel/ConversionPanel.component';
const RatesPanel = React.lazy(
  () => import('../../components/RatesPanel/RatesPanel.component'),
);
const HeaderButtons = React.lazy(
  () => import('../../components/HeaderButtons/HeaderButtons.component'),
);
const LastUpdate = React.lazy(
  () => import('../../components/LastUpdate/LastUpdate.component'),
);

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
                <LastUpdate />
              </FooterContainer>
            </Suspense>
          </CurrencyProvider>
        </HomeContainer>
      </ThemeProvider>
    </>
  );
}

export default Home;
