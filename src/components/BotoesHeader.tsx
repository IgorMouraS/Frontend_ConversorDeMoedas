// Bibliotecas externas
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

// Arquivos de estilo
import { Button, Container, IconTheme } from '../styles/BotoesHeader.style';

// Contexto
import { useHistorico } from '../context/historicoContext';
import { useTema } from '../context/TemaContext';

// Componentes
import Historico from '../components/Historico';

const BotoesHeader: React.FC = () => {
  const { historico } = useHistorico();
  const { isDark, alterarTema } = useTema();
  return (
    <>
      <Container>
        <Historico historico={historico} />
        <Button onClick={alterarTema} className={isDark ? 'dark' : ''}>
          <IconTheme className={isDark ? 'dark' : ''}>
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
          </IconTheme>
        </Button>
      </Container>
    </>
  );
};

export default BotoesHeader;
