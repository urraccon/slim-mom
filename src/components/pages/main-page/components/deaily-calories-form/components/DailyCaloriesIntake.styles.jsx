import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 20px 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 544px) {
    padding: 64px 150px 0;
    align-items: center;
  }
`;

export const DailyCal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 545px) {
    gap: 20px;
  }
`;

export const DailyCalTitle = styled.h4`
  margin: 0;
  font-size: 18px;
  line-height: 140%;

  @media screen and (min-width: 544px) {
    font-size: 26px;
    text-align: center;
  }
`;

export const DailyCalValue = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: 1.92px;
  text-align: center;
  color: #264061;
`;

export const Space = styled.span`
  font-size: 26px;
`;

export const Kcal = styled.span`
  font-size: 16px;
`;

export const RestFood = styled.div`
  margin-bottom: 40px;
  width: 100%;

  @media screen and (min-width: 545px) {
    max-width: 330px;
  }
`;

export const RestFoodTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.56px;
  margin-bottom: 20px;
`;

export const FoodList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Food = styled.li`
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #9b9faa;
`;
