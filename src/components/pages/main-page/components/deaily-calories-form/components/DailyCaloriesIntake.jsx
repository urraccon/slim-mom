import PropTypes from 'prop-types';
import {
  Container,
  DailyCal,
  DailyCalTitle,
  DailyCalValue,
  Food,
  FoodList,
  Kcal,
  RestFood,
  RestFoodTitle,
  Space,
} from './DailyCaloriesIntake.styles';
import { Button, Divider } from '@mui/material';
import { ButtonComp } from 'components/common/components/Button';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import CloseIcon from '@mui/icons-material/Close';

const returnBtnStyle = {
  width: '100%',
  height: '40px',
  borderRadius: 0,
  backgroundColor: '#EFF1F3',
  color: '#9B9FAA',
  justifyContent: 'start',
  paddingLeft: '20px',

  '&:hover': {
    backgroundColor: '#EFF1F3',
  },
};

const returnIconStyle = {
  width: '12px',
  color: 'black',
  stroke: 'black',
  strokeWidth: 1,
};

const linkStyle = {
  alignSelf: 'center',
};

const closeIconStyle = {
  color: 'black',
  height: '20px',
  width: '20px',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
};

export const DailyCaloriesIntake = ({ calories, restFood, onClick }) => {
  const isTablet = useMediaQuery({ minWidth: 545 });

  const dividerStyle = {
    margin: isTablet ? '32px 0 12px' : '32px 0 20px',
    borderBottom: '1px solid #e0e0e0',
    width: '100%',
  };

  return (
    <>
      {isTablet ? (
        <Button sx={closeBtnStyle} onClick={onClick}>
          <CloseIcon sx={closeIconStyle} />
        </Button>
      ) : (
        <Button sx={returnBtnStyle} onClick={onClick}>
          <KeyboardReturnIcon sx={returnIconStyle} />
        </Button>
      )}
      <Container>
        <DailyCal>
          <DailyCalTitle>
            Your recommended daily calorie intake is
          </DailyCalTitle>
          <DailyCalValue>
            {calories}
            <Space> </Space>
            <Kcal>kcal</Kcal>
          </DailyCalValue>
        </DailyCal>
        <RestFood>
          <Divider sx={dividerStyle} />
          <RestFoodTitle>Foods you should not eat</RestFoodTitle>
          <FoodList>
            {restFood?.map(food => (
              <Food key={restFood.indexOf(food)}>
                {`${restFood.indexOf(food) + 1}. ${food}`}
              </Food>
            ))}
          </FoodList>
        </RestFood>
        <NavLink to="login" style={linkStyle}>
          <ButtonComp onClick={onClick}>Start losing weight</ButtonComp>
        </NavLink>
      </Container>
    </>
  );
};

DailyCaloriesIntake.propTypes = {
  calories: PropTypes.number,
  restFood: PropTypes.array,
  onClick: PropTypes.func,
};
