import styled from 'styled-components';

export const Item = styled.li``;

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    align-items: center;
    gap: 7px;
    padding-right: 6px;
  }

  @media screen and (min-width: 768px) {
    gap: 28px;
    padding-right: 36px;
  }
`;

export const Box = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 767px) {
    gap: 5px;
    flex-wrap: wrap;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 46px;
  }

  @media screen and (min-width: 1280px) {
    gap: 32px;
  }
`;

export const Flex = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    gap: 5px;
    width: 74.7%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 22px;
    width: 70.5%;
  }

  @media screen and (min-width: 1280px) {
    gap: 48px;
    width: 73.85%;
  }
`;

export const Name = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;

  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 767px) {
    width: 71.07%;
    padding-bottom: 8px;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 68.3%;
  }

  @media screen and (min-width: 1280px) {
    width: 67.64%;
  }
`;

export const Quantity = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 767px) {
    text-align: center;
    width: 26.06%;
    padding-bottom: 8px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 30.16%;
  }

  @media screen and (min-width: 768px) {
    text-align: right;
    padding-bottom: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 30.15%;
  }
`;

export const Calories = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  border-bottom: 1px solid #e0e0e0;

  @media screen and (max-width: 767px) {
    padding-bottom: 8px;
    text-align: center;
    width: 23.2%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 20.3%;
  }

  @media screen and (min-width: 768px) {
    padding-bottom: 20px;
    text-align: right;
  }

  @media screen and (min-width: 1280px) {
    width: 19.81%;
  }
`;

export const Kcal = styled.span`
  @media screen and (max-width: 767px) {
    font-size: 10px;
    letter-spacing: 0.04em;
  }
`;
