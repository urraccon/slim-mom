import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (min-width: 768px) {
    align-items: end;
  }
`;

export const Date = styled.h1`
  color: #212121;
  margin: 0;
  line-height: 1.1;

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 34px;
  }
`;
