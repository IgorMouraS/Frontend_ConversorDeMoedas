import PropTypes from 'prop-types';
import { DropdownContainer } from '../styles/home.styles';
import { DropdownBtn } from './DropdownBtn';

interface DropdownProps {
  labelOrigem: string;
  valueOrigem: string;
  onChangeOrigem: (value: string) => void;
  optionsOrigem: string[];
  labelDestino: string;
  valueDestino: string;
  onChangeDestino: (value: string) => void;
  optionsDestino: string[];
}

export const DropdownComponent: React.FC<DropdownProps> = ({
  labelOrigem,
  valueOrigem,
  onChangeOrigem,
  optionsOrigem,
  labelDestino,
  valueDestino,
  onChangeDestino,
  optionsDestino,
}) => {
  return (
    <DropdownContainer>
      <DropdownBtn
        label={labelOrigem}
        value={valueOrigem}
        onChange={onChangeOrigem}
        options={optionsOrigem}
      />
      <DropdownBtn
        label={labelDestino}
        value={valueDestino}
        onChange={onChangeDestino}
        options={optionsDestino}
      />
    </DropdownContainer>
  );
};

DropdownComponent.propTypes = {
  labelOrigem: PropTypes.string.isRequired,
  valueOrigem: PropTypes.string.isRequired,
  onChangeOrigem: PropTypes.func.isRequired,
  optionsOrigem: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  labelDestino: PropTypes.string.isRequired,
  valueDestino: PropTypes.string.isRequired,
  onChangeDestino: PropTypes.func.isRequired,
  optionsDestino: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
