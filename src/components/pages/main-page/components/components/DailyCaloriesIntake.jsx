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
  Content,
  Wrapper,
} from './DailyCaloriesIntake.styles';
import { Divider } from '@mui/material';
import { ButtonComp } from 'components/common/components/Button';
import { NavLink } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
// import { useSelector } from 'react-redux';
// import {
//   selectDailyRateCal,
//   selectRestrictedProdList,
// } from 'components/redux/diary/selectors';

const linkStyle = {
  alignSelf: 'center',
};

const dividerStyle = largeScreens => ({
  margin: largeScreens ? '32px 0 12px' : '32px 0 20px',
  borderBottom: '1px solid #e0e0e0',
  width: largeScreens ? 330 : '100%',
});

export const DailyCaloriesIntake = () => {
  const largeScreens = useMediaQuery({ minWidth: 768 });

  // const restrictedProdList = useSelector(selectRestrictedProdList);
  // const dailyRateCal = useSelector(selectDailyRateCal);

  const restrictedProdList = [
    'flour products',
    'milk',
    'read meat',
    'smoked meats',
  ];
  const dailyRateCal = 2800;

  return (
    <Container>
      <Wrapper>
        <Content>
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
          <Divider sx={dividerStyle(largeScreens)} />
          <RestrictedProd>
            <RestrictedProdTitle>Foods you should not eat</RestrictedProdTitle>
            <List>
              {restrictedProdList.length === 0 ? (
                <Text>Your diet will be displayed here</Text>
              ) : (
                restrictedProdList?.map(restrictedProduct => (
                  <Item key={restrictedProdList.indexOf(restrictedProduct)}>
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
        </Content>
      </Wrapper>
    </Container>
  );
};
