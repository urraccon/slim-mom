import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  gap: 17px;
  align-items: end;

  @media screen and (min-width: 545px) {
    gap: 32px;
  }
`;

export const Name = styled.span`
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #212121;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  min-width: 130px;

  @media screen and (min-width: 545px) {
    width: 240px;
  }
`;

export const Quantity = styled.span`
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #212121;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  min-width: 49px;
  text-align: center;

  @media screen and (min-width: 545px) {
    width: 106px;
    padding-bottom: 20px;
    text-align: right;
  }
`;

export const Calories = styled.span`
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #212121;
  padding-bottom: 8px;
  border-bottom: 1px solid #e0e0e0;
  min-width: 58px;
  text-align: center;

  @media screen and (min-width: 545px) {
    width: 106px;
    padding-bottom: 20px;
    text-align: right;
  }
`;

export const Kcal = styled.span`
  @media screen and (max-width: 544px) {
    font-size: 10px;
    letter-spacing: 0.4px;
  }
`;

export const DairyProdContainer = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 545px) {
    gap: 22px;
  }

  @media screen and (min-width: 1025px) {
    gap: 48px;
  }
`;

export const Container = styled.div`
  display: flex;
  gap: 8px;

  @media screen and (min-width: 545px) {
    gap: 46px;
  }

  @media screen and (min-width: 1025px) {
    gap: 32px;
  }
`;
