import styled from 'styled-components';

export const FormContainer = styled.div`
  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding: 40px 20px 0;
  align-items: center;
  width: 100%;

  @media screen and (min-width: 545px) {
    align-items: start;
    padding: 160px 32px 0;
  }

  @media screen and (min-width: 1025px) {
    padding: 226px 16px 0;
  }
`;

export const FormTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.56px;
  color: #fc842d;
  text-transform: uppercase;
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
`;

export const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 545px) {
    align-items: start;
    flex-direction: row;
    gap: 32px;
  }
`;
