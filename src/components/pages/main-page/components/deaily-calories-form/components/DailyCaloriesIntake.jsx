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
import { Divider } from '@mui/material';
import { ButtonComp } from 'components/common/components/Button';

import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const linkStyle = {
  alignSelf: 'center',
};

export const DailyCaloriesIntake = ({ calories, restFood }) => {
  const isTablet = useMediaQuery({ minWidth: 545 });

  const dividerStyle = {
    margin: isTablet ? '32px 0 12px' : '32px 0 20px',
    borderBottom: '1px solid #e0e0e0',
    width: '100%',
  };

  return (
    <Container>
      <DailyCal>
        <DailyCalTitle>Your recommended daily calorie intake is</DailyCalTitle>
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
        <ButtonComp>Start losing weight</ButtonComp>
      </NavLink>
    </Container>
  );
};

DailyCaloriesIntake.propTypes = {
  calories: PropTypes.number,
  restFood: PropTypes.array,
};
