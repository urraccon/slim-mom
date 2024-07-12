import styled from 'styled-components';

export const NavMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 14px;
  align-items: end;
  padding-bottom: 9px;

  @media screen and (min-width: 545px) {
    gap: 24px;
  }

  @media screen and (min-width: 1025px) {
    padding-bottom: 4px;
  }
`;

export const NavBtn = styled.li`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;
  text-transform: uppercase;
  color: #9b9faa;

  &:hover {
    color: #212121;
    cursor: pointer;
  }
`;

export const ModalNavMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  gap: 28px;

  @media screen and (min-width: 545px) {
    padding-top: 100px;
  }
`;

export const ModalNavBtn = styled.li`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.72px;
  text-transform: uppercase;
  color: #9b9faa;

  &:hover {
    color: #fff;
    cursor: pointer;
  }

  @media screen and (min-width: 545px) {
    font-size: 24px;
    letter-spacing: 0.96px;
  }
`;
