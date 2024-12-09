import styled from 'styled-components';

const breakpoints = {
  mobile: '510px',
  tablet: '790px',
  desktop: '1024px',
};

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;

  &:focus {
    outline: none;
  }

  &:hover {
    transform: scale(1.1);
  }
  &:hover,
  &:hover * {
    color: #008800;
  }

  &:active,
  &:active * {
    color: #00c500;
    cursor: wait;
  }

  &.dark {
    &:hover,
    &:hover * {
      color: #00c700;
    }

    &:active,
    &:active * {
      color: #00f200;
    }
  }
`;

export const Lista = styled.div`
  position: absolute;
  left: 180%;
  top: -30%;
  z-index: 10;
  list-style-type: none;
  padding: 0;
  margin-top: 0.6rem;
  border-radius: 25px;
  border: 1px solid #d5d5d5;
  overflow: hidden;

  &.dark {
    border: 2px solid #1e1e1e;
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    left: -150%;
    top: 100%;
  }
`;

export const Linha = styled.p`
  background-color: #ececec;
  color: #1e1e1e;
  text-align: center;
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
  border: 1px solid #d5d5d5;
  box-shadow:
    inset 1px 1px 2px rgba(0, 0, 0, 0.1),
    inset -2px -2px 4px rgba(235, 255, 203, 0.3);
  white-space: nowrap;

  &.dark {
    background-color: #585858;
    color: #d5d5d5;
    border: 1px solid #1e1e1e;
    box-shadow:
      inset -2px -2px 2px rgba(0, 0, 0, 0.1),
      inset 2px 2px 4px rgba(235, 255, 203, 0.3);
  }

  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 0.8rem;
    white-space: wrap;
  }
`;

export const IconHistorico = styled.i`
  font-size: 2rem;
  color: #1e1e1e;
  margin-bottom: 1.5rem;

  &.dark {
    color: #d5d5d5;
  }
  /* Responsividade */
  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1.7rem;
  }

  @media (min-width: ${breakpoints.mobile}) and max-width: ${breakpoints.tablet}) {
    font-size: 1.7rem;
  }

  @media (min-width: ${breakpoints.desktop}) {
    font-size: 2rem;
  }
`;

export const IconConversao = styled.i`
  background-color: transparent;
  font-size: 1rem;
  color: #1e1e1e;
  svg {
    fill: currentColor;
    background: none;
  }

  &.dark {
    color: #d5d5d5;
  }
`;
