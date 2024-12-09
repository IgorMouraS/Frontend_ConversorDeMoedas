import styled from 'styled-components';

const breakpoints = {
  mobile: '510px',
  tablet: '790px',
  desktop: '1024px',
};

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    gap: 1rem;
    padding: 0 1rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    gap: 4rem;
    padding: 0 2rem;
  }
`;

export const CampoDeConversao = styled.div<{ $erro: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow:
    4px 4px 10px rgba(0, 0, 0, 0.15),
    inset -2px 1px 4px rgba(0, 0, 0, 0.2);
  background-color: ${(props) => (props.$erro ? '#ffc2c2' : '#e4e4e4')};
  border: none;
  border-radius: 25px;

  &.dark {
    box-shadow:
      4px 4px 10px rgba(0, 0, 0, 0.5),
      inset -2px 1px 4px rgba(0, 0, 0, 0.8);
    background-color: ${(props) => (props.$erro ? '#ffc2c2' : '#9d9d9d')};
  }
`;

export const Select = styled.select`
  box-shadow: inset -1px 1px 2px rgba(0, 0, 0, 0.3);
  background-color: #dddddd;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  border: none;
  border-radius: 50px 25px 25px 50px;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: inset -1px 1px 2px rgba(0, 58, 0, 0.5);
    cursor: pointer;
    background-color: #70ff70;
  }

  &:active {
    background-color: #00eb00;
  }

  &.dark {
    box-shadow: inset -1px 1px 2px rgba(0, 0, 0, 0.8);
    background-color: #c0c0c0;

    &:hover {
      box-shadow: inset -1px 1px 2px rgba(0, 58, 0, 0.8);
      background-color: #50ff50;
    }

    &:active {
      background-color: #00ce00;
    }
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    padding: 1.3rem .5rem;
    font-size: 1.4rem;
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    padding: 0.8rem 0.2rem;
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    padding: 1.5rem 2rem;
    font-size: 1.2rem;
  }
`;

export const Option = styled.option`
  font-size: 1.2rem;
  text-align: center;
  color: #1e1e1e;

  &.dark {
    color: #d5d5d5;
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.4rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const Button = styled.button`
  color: #008800;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.2);
  }
  &:hover,
  &:hover * {
    color: #00c500;
  }

  &:active,
  &:active * {
    color: #00c500;
    cursor: wait;
  }

  &.dark {
    color: #00c700;

    &:hover,
    &:hover * {
      color: #00f200;
    }

    &:active,
    &:active * {
      color: #6aff6a;
    }
  }
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    font-size: 0.8rem;
    margin-bottom: 0.4rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const IconConverter = styled.i`
  font-size: 1.6rem;

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    font-size: 1.2rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
  }
`;

export const ErroContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ErroTexto = styled.p`
  font-size: 0.9rem;
  color: #c20000;
  margin-top: 0.5rem;
  margin-left: 1.6rem;

  &.dark {
    color: #ff4343;
  }
`;
