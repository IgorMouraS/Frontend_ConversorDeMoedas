import styled from 'styled-components';

export const Container_S = styled.div`
  overflow: hidden;
  padding: 1rem 0;
  width: 100wh;
`;

export const CurrencyPanel_S = styled.div`
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

export const Currency_S = styled.div`
  align-items: center;
  background-color: transparent;
  border: none;
  display: flex;
  gap: 1rem;
  justify-content: center;
  min-width: 120px;
  text-align: center;
`;

export const Title_S = styled.h4`
  color: ${({ theme }) => theme.color.text};
  margin: 0;
`;

export const Rate_S = styled.p`
  color: ${({ theme }) => theme.color.text};
  margin: 5px 0;
`;
