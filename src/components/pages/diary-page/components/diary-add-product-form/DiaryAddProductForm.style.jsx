import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 40px;
  width: 100%;
  height: calc(100% - 40px);
  overflow: auto;
  background-color: white;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }
`;

export const Form = styled.form`
  display: flex;

  @media screen and (max-width: 767px) {
    min-height: 446.4px;
    height: calc(100vh - 201.6px);
    flex-direction: column;
    gap: 60px;
    align-items: center;
    width: 87.28%;
    margin: 80px auto 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 87px;
    margin-right: 88px;
  }

  @media screen and (min-width: 768px) {
    align-items: end;
  }

  @media screen and (min-width: 1280px) {
    gap: 60px;
    margin-right: 88px;
  }
`;

export const Fields = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 32px;
    width: 100%;
    max-width: 450px;
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
