import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 80px;
  margin: 32px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 34px;

  @media screen and (min-width: 545px) {
    margin: 100px 32px 0;
    max-width: 520px;
    gap: 68px;
  }

  @media screen and (min-width: 1025px) {
    margin: 213px 16px 0;
  }
`;

export const FormTitle = styled.h4`
  margin: 0;
  line-height: 25.2px;

  @media screen and (min-width: 545px) {
    font-size: 34px;
    line-height: 140%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 545px) {
    gap: 60px;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media screen and (min-width: 545px) {
    max-height: 200px;
    row-gap: 40px;
    flex-wrap: wrap;
  }
`;
