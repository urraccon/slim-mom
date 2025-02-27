import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (min-width: 1280px) {
    width: 59.86%;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    height: 45.33vh;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 54.56vh;
  }

  @media screen and (min-width: 1280px) {
    height: 100%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    width: 87.5%;
    max-width: 450px;
    margin: 32px auto 0;
    gap: 56px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 91.66%;
    max-width: 850px;
    margin: 100px auto 0;
  }

  @media screen and (min-width: 768px) {
    gap: 68px;
  }

  @media screen and (min-width: 1280px) {
    margin: 293px 18.61% 111px 0;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #212121;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    line-height: 1.4em;
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
    line-height: 1.25em;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    gap: 40px;
  }

  @media screen and (min-width: 768px) {
    gap: 60px;
  }
`;

export const Fields = styled.div`
  display: flex;
  gap: 32px;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    gap: 32px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 34.1%;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 39.5%;
  }
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 767px) {
    gap: 32px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 34.1%;
  }

  @media screen and (min-width: 768px) {
    gap: 40px;
  }

  @media screen and (min-width: 1280px) {
    width: 39.5%;
  }
`;
