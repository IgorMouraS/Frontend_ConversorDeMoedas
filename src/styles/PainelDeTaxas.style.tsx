import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 0;
  width: 100wh;
  overflow: hidden;
`;

export const PainelDeMoedas = styled.div`
  display: flex;
  gap: 20px;
  border: none;
  border-radius: 10px;
  animation: scrollAuto 200s linear infinite;

  &::after {
    content: '';
    display: flex;
    gap: 20px;
    margin-left: 20px;
  }

  @keyframes scrollAuto {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-1000%);
    }
  }
`;

export const Moeda = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: transparent;
  border: none;
  text-align: center;
  min-width: 120px;
`;

export const Titulo = styled.h4`
  margin: 0;
  color: #1e1e1e;
  &.dark {
    color: #d5d5d5;
  }
`;

export const Taxa = styled.p`
  margin: 5px 0;
  color: #1e1e1e;
  &.dark {
    color: #d5d5d5;
  }
`;
