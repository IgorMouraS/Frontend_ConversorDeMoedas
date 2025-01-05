// External libraries
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-regular-svg-icons';
import {
  faSun,
  faMoneyBillTransfer,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

// Style files
import { Button, Container, ThemeIcon } from '../styles/HeaderButtons.style';
import {
  Container as ContainerHistory,
  List,
  Line,
  HistoryIcon,
  ConversionIcon,
  Button as ButtonHistory,
} from '../styles/History.style';

// Context
import { useHistory } from '../context/HistoryContext';
import { useTheme } from '../context/ThemeContext';

const HeaderButtons: React.FC & {
  History: React.FC;
  Theme: React.FC;
} = () => {
  return (
    <>
      <Container>
        <HeaderButtons.History />
        <HeaderButtons.Theme />
      </Container>
    </>
  );
};

HeaderButtons.History = () => {
  const { history } = useHistory();
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const { theme } = useTheme();

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <ContainerHistory>
      <ButtonHistory onClick={toggleHistory} className={theme ? 'dark' : ''}>
        <HistoryIcon className={theme ? 'dark' : ''}>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            style={{ background: 'none', padding: 0 }}
          />
        </HistoryIcon>
      </ButtonHistory>
      {showHistory && (
        <List className={theme ? 'dark' : ''}>
          {history.map((item, index) => (
            <Line className={theme ? 'dark' : ''} key={index}>
              {item.amount} {item.fromCurrency}{' '}
              <ConversionIcon className={theme ? 'dark' : ''}>
                <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>{' '}
              </ConversionIcon>
              {item.result.toFixed(2)} {item.toCurrency}
            </Line>
          ))}
        </List>
      )}
    </ContainerHistory>
  );
};

HeaderButtons.Theme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <Button onClick={toggleTheme} className={theme ? 'dark' : ''}>
      <ThemeIcon className={theme ? 'dark' : ''}>
        <FontAwesomeIcon icon={theme ? faSun : faMoon} />
      </ThemeIcon>
    </Button>
  );
};

export default HeaderButtons;
