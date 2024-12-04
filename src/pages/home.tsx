import { Container, Title, Form } from '../styles/home.styles';

import { Converter } from '../components/Converter';

// Criando o Contexto de Moeda
// const CurrencyContext = createContext<{
//   exchangeRates: { [key: string]: number };
//   currencies: string[];
//   setExchangeRates: React.Dispatch<
//     React.SetStateAction<{ [key: string]: number }>
//   >;
//   setCurrencies: React.Dispatch<React.SetStateAction<string[]>>;
// }>({
//   exchangeRates: {},
//   currencies: [],
//   setExchangeRates: () => {},
//   setCurrencies: () => {},
// });

function Home() {
  return (
    <>
      <Container>
        <Title>Conversor de Moedas - em tempo real</Title>
        <Form>
          <Converter />
        </Form>
      </Container>
    </>
  );
}

export default Home;
