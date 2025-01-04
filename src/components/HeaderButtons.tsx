// External libraries
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';

// Style files
import { Button, Container, ThemeIcon } from '../styles/HeaderButtons.style';

// Context
import { useHistory } from '../context/HistoryContext';
import { useTheme } from '../context/ThemeContext';

// Components
import History from './History';

const HeaderButtons: React.FC = () => {
  const { history } = useHistory();
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <Container>
        <History history={history} />
        <Button onClick={toggleTheme} className={theme ? 'dark' : ''}>
          <ThemeIcon className={theme ? 'dark' : ''}>
            <FontAwesomeIcon icon={theme ? faSun : faMoon} />
          </ThemeIcon>
        </Button>
      </Container>
    </>
  );
};

export default HeaderButtons;
