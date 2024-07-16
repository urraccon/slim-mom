import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  @media screen and (min-width: 545px) {
    align-items: end;
  }
`;

export const Date = styled.span`
  font-weight: bold;
  font-size: 18px;

  @media screen and (min-width: 545px) {
    font-size: 34px;
  }
`;
