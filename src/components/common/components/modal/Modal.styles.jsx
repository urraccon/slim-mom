import styled from 'styled-components';

export const Content = styled.div`
  padding: 64px 102px 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Calories = styled.div`
  margin-bottom: 32px;
`;

export const CaloriesText = styled.p`
  margin: 0;
  margin-bottom: 20px;
  font-size: 26px;
  font-weight: 700;
  line-height: 36.4px;
  text-align: center;
  color: #212121;
`;

export const CaloriesValue = styled.p`
  margin: 0;
  font-size: 48px;
  font-weight: 700;
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

export const Foods = styled.div`
  margin-bottom: 40px;
  width: 330px;
`;

export const FoodsText = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;
  color: #212121;
`;

export const FoodList = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;

  li:last-child {
    margin-bottom: 0;
  }
`;

export const Food = styled.li`
  margin-bottom: 14px;
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #9b9faa;
`;
