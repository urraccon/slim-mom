import styled from 'styled-components';

export const Image = styled.img`
  width: auto;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1279px) {
    height: 44px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 7px;
    height: 66px;
  }
`;
