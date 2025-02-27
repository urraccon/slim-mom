import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    height: 596.8px;
  }
`;

export const Container = styled.div`
  width: 100%;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: 40px;
    height: calc(100vh - 121.6px);
    overflow: auto;
    display: flex;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    width: 87.5%;
    margin: 0 auto;
    max-width: 450px;
    padding-top: 40px;
  }

  @media screen and (min-width: 768px) {
    margin: 64px 82px 79px;
    align-items: center;
  }
`;

export const DailyRateCal = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    gap: 41px;
  }

  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`;

export const DailyRateCalTitle = styled.h4`
  margin: 0;
  color: #212121;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.4em;
  }

  @media screen and (min-width: 768px) {
    font-size: 26px;
    text-align: center;
    line-height: 1.35em;
  }
`;

export const Value = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 48px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #264061;
  line-height: 1.3;
`;

export const Space = styled.span`
  font-size: 26px;
`;

export const Kcal = styled.span`
  font-size: 16px;
`;

export const RestrictedProd = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    width: 330px;
  }
`;

export const RestrictedProdTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: #212121;
  line-height: 1.2em;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.li`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  text-transform: capitalize;
  line-height: 1.25;
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #9b9faa;
  line-height: 1.2;
`;
