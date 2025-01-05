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
import { CurrencyProvider } from '../context/CurrencyContext';
import { HistoryProvider } from '../context/HistoryContext';
import { useTheme } from '../context/ThemeContext';

// Components
import { Converter } from '../components/Conversor';
const RatesPanel = React.lazy(() => import('../components/RatesPanel'));
const HeaderButtons = React.lazy(() => import('../components/HeaderButtons'));
const ExtraInfo = React.lazy(() => import('../components/extraInfo'));

function Home() {
  const { theme } = useTheme();
  return (
    <>
      <GlobalStyle homeTheme={theme} />
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
                <Title className={theme ? 'dark' : ''}>
                  Conversor de Moedas
                </Title>
              </TitleAndFeatures>
              <BodyContainer>
                <Converter />
              </BodyContainer>
            </HistoryProvider>
          </Container>
          <Suspense fallback={<div>Loading...</div>}>
            <FooterContainer className={theme ? 'dark' : ''}>
              <ExtraInfo />
            </FooterContainer>
          </Suspense>
        </CurrencyProvider>
      </HomeContainer>
    </>
  );
}

export default Home;
