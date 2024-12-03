// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  text-align: center;
  margin-bottom: 2rem;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

const DropdownContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 150px;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
`;

const Output = styled.div`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  background-color: #fff;
  text-align: center;
`;

function App() {
  return (
    <>
      <Container>
        <Title>Conversor de Moedas - em tempo real</Title>
        <Form>
          <DropdownContainer>
            <Dropdown>
              <option>Moeda Origem</option>
            </Dropdown>
            <Dropdown>
              <option>Moeda Destino</option>
            </Dropdown>
          </DropdownContainer>
          <Input placeholder="Digite o valor" />
          <Output>Resultado</Output>
        </Form>
      </Container>
    </>
  );
}

export default App;
