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
import {
  Button_S,
  Container_S,
  ThemeIcon_S,
  ContainerHistory_S,
  List_S,
  Line_S,
  HistoryIcon_S,
  ConversionIcon_S,
  ButtonHistory_S,
} from './HeaderButtons.style';

// Context
import { useHistory } from '../../context/History/History.context';

// hooks
import { useThemeContext } from '../../context/Theme/Theme.context';

const HeaderButtons: React.FC & {
  History: React.FC;
  Theme: React.FC;
} = () => {
  return (
    <>
      <Container_S>
        <HeaderButtons.History />
        <HeaderButtons.Theme />
      </Container_S>
    </>
  );
};

HeaderButtons.History = () => {
  const { history } = useHistory();
  const [showHistory, setShowHistory] = useState<boolean>(false);

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <ContainerHistory_S>
      <ButtonHistory_S onClick={toggleHistory}>
        <HistoryIcon_S>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            style={{ background: 'none', padding: 0 }}
          />
        </HistoryIcon_S>
      </ButtonHistory_S>
      {showHistory && (
        <List_S>
          {history.map((item, index) => (
            <Line_S key={index}>
              {item.amount} {item.fromCurrency}{' '}
              <ConversionIcon_S>
                <FontAwesomeIcon icon={faMoneyBillTransfer}></FontAwesomeIcon>{' '}
              </ConversionIcon_S>
              {item.result.toFixed(2)} {item.toCurrency}
            </Line_S>
          ))}
        </List_S>
      )}
    </ContainerHistory_S>
  );
};

HeaderButtons.Theme = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <Button_S onClick={toggleTheme}>
      <ThemeIcon_S>
        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
      </ThemeIcon_S>
    </Button_S>
  );
};

export default HeaderButtons;
