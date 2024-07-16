import PropTypes from 'prop-types';
import {
  Calories,
  Container,
  DairyProdContainer,
  Item,
  Kcal,
  Name,
  Quantity,
} from './DiaryProductListItem.styles';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from 'react-responsive';

export const DiaryProductListItem = ({ name, calories, quantity }) => {
  const mobile = useMediaQuery({ maxWidth: 544 });

  const btnStyle = {
    padding: 0,
    minWidth: 'unset',
    color: 'black',
    height: 'fit-content',
    marginBottom: mobile ? '5px' : '15px',
  };

  const iconStyle = {
    width: mobile ? '17px' : '21px',
    height: mobile ? '17px' : '21px',
    color: '#9B9FAA',
    stroke: '#9B9FAA',
    stokeWidth: 1,
  };

  return (
    <Item>
      <DairyProdContainer>
        <Name>{name}</Name>
        <Container>
          <Quantity>{quantity} g</Quantity>
          <Calories>
            {calories}
            <Kcal> kcal</Kcal>
          </Calories>
        </Container>
      </DairyProdContainer>
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
