import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  overflow: auto;
  display: flex;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media screen and (max-width: 1279px) {
    top: 81.6px;
    height: calc(100vh - 81.6px);
  }

  @media screen and (min-width: 1280px) {
    top: 154px;
    height: calc(100vh - 154px);
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  margin: auto;

  @media screen and (max-width: 767px) {
    align-items: center;
    padding-top: 40px;
    max-width: 450px;
    margin: auto;
    width: 87.5%;
    height: 566.4px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding-top: 160px;
    height: 942.4px;
    max-width: 850px;
    width: 91.6%;
  }

  @media screen and (min-width: 768px) {
    align-items: start;
  }

  @media screen and (min-width: 1280px) {
    padding-top: 140px;
    height: 696px;
    width: 97.5%;
    max-width: 1440px;
  }
`;

export const Title = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: #fc842d;
  text-transform: uppercase;
  line-height: 1.2;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 100%;
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    width: 240px;
  }
`;

export const Buttons = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }

  @media screen and (min-width: 768px) {
    align-items: start;
    flex-direction: row;
    gap: 32px;
  }
`;
