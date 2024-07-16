import styled from 'styled-components';

export const Form = styled.form`
  padding: 80px 20px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  @media screen and (min-width: 545px) {
    padding: 60px 0 0;
    flex-direction: row;
    align-items: end;
    gap: 87px;
  }

  @media screen and (min-width: 1025px) {
    gap: 60px;
  }
`;

export const Fields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  @media screen and (min-width: 545px) {
    flex-direction: row;
    gap: 22px;
    width: unset;
  }

  @media screen and (min-width: 1025px) {
    gap: 48px;
  }
`;
