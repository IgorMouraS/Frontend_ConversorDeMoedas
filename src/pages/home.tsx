import { Container, Title, Form } from '../styles/home.styles';

import { CurrencyProvider } from '../context/CurrencyContext';

import { Converter } from '../components/Converter';

function Home() {
  return (
    <>
      <Container>
        <Title>Conversor de Moedas - em tempo real</Title>
        <Form>
          <CurrencyProvider>
            <Converter />
          </CurrencyProvider>
        </Form>
      </Container>
    </>
  );
}

export default Home;
