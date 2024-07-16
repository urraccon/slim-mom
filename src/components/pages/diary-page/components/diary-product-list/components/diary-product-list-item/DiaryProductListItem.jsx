import PropTypes from 'prop-types';
import {
  Calories,
  Container,
  Item,
  Kcal,
  Name,
  Quantity,
} from './DiaryProductListItem.styles';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const btnStyle = {
  padding: 0,
  minWidth: 'unset',
  color: 'black',
};

const iconStyle = {
  width: '17px',
  height: '17px',
  color: '#9B9FAA',
  stroke: '#9B9FAA',
  stokeWidth: 1,
};

export const DiaryProductListItem = ({ name, calories, quantity }) => {
  return (
    <Item>
      <Container>
        <Name>{name}</Name>
        <Calories>{calories}</Calories>
        <Quantity>
          {quantity}
          <Kcal> kcal</Kcal>
        </Quantity>
      </Container>
      <Button style={btnStyle}>
        <CloseIcon style={iconStyle} />
      </Button>
    </Item>
  );
};

DiaryProductListItem.propTypes = {
  name: PropTypes.string,
  calories: PropTypes.number,
  quantity: PropTypes.number,
};
