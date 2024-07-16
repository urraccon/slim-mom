import PropTypes from 'prop-types';
import {
  Container,
  DailyRateCal,
  DailyRateCalTitle,
  Value,
  Item,
  List,
  Kcal,
  RestrictedProd,
  RestrictedProdTitle,
  Space,
  Text,
} from './DailyCaloriesIntake.styles';
import { Divider } from '@mui/material';
import { ButtonComp } from 'components/common/components/Button';

import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

const linkStyle = {
  alignSelf: 'center',
};

export const DailyCaloriesIntake = ({ dailyRateCal, restrictedProdList }) => {
  const largeScreen = useMediaQuery({ minWidth: 545 });

  const dividerStyle = {
    margin: largeScreen ? '32px 0 12px' : '32px 0 20px',
    borderBottom: '1px solid #e0e0e0',
    width: '100%',
  };

  return (
    <Container>
      <DailyRateCal>
        <DailyRateCalTitle>
          Your recommended daily calorie intake is
        </DailyRateCalTitle>
        <Value>
          {dailyRateCal === null ? '0' : dailyRateCal}
          <Space> </Space>
          <Kcal>kcal</Kcal>
        </Value>
      </DailyRateCal>
      <RestrictedProd>
        <Divider sx={dividerStyle} />
        <RestrictedProdTitle>Foods you should not eat</RestrictedProdTitle>
        <List>
          {restrictedProdList.length === 0 ? (
            <Text>Your diet will be displayed here</Text>
          ) : (
            restrictedProdList?.map(restrictedProduct => (
              <Item key={restrictedProduct.indexOf(restrictedProduct)}>
                {`${
                  restrictedProdList.indexOf(restrictedProduct) + 1
                }. ${restrictedProduct}`}
              </Item>
            ))
          )}
        </List>
      </RestrictedProd>
      <NavLink to="login" style={linkStyle}>
        <ButtonComp>Start losing weight</ButtonComp>
      </NavLink>
    </Container>
  );
};

DailyCaloriesIntake.propTypes = {
  dailyRateCal: PropTypes.number,
  restrictedProdList: PropTypes.array,
};
