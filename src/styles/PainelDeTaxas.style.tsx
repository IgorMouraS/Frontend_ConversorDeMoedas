import styled from 'styled-components';

export const Container = styled.div`
  overflow: hidden;
  padding: 1rem 0;
  width: 100wh;
`;

export const PainelDeMoedas = styled.div`
  animation: scrollAuto 200s linear infinite;
  border: none;
  border-radius: 10px;
  display: flex;
  gap: 20px;

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
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  min-width: 120px;
  text-align: center;
`;

export const Titulo = styled.h4`
  color: #1e1e1e;
  margin: 0;

  &.dark {
    color: #d5d5d5;
  }
`;

export const Taxa = styled.p`
  color: #1e1e1e;
  margin: 5px 0;

  &.dark {
    color: #d5d5d5;
  }
`;
