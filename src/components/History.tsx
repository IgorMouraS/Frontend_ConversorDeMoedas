// External libraries
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBillTransfer,
  faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';

// Style files
import {
  Container,
  List,
  Line,
  HistoryIcon,
  ConversionIcon,
  Button,
} from '../styles/History.style';

// Context
import { useTheme } from '../context/ThemeContext';

interface HistoryProps {
  history: HistoryInfo[];
}

interface HistoryInfo {
  fromCurrency: string;
  toCurrency: string;
  amount: string;
  result: number;
}

const History: React.FC<HistoryProps> = ({ history }) => {
  const [showHistory, setShowHistory] = useState<boolean>(false);
  const { theme } = useTheme();

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <Container>
      <Button onClick={toggleHistory} className={theme ? 'dark' : ''}>
        <HistoryIcon className={theme ? 'dark' : ''}>
          <FontAwesomeIcon
            icon={faClockRotateLeft}
            style={{ background: 'none', padding: 0 }}
          />
        </HistoryIcon>
      </Button>
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
    </Container>
  );
};

// Default export
export default History;
