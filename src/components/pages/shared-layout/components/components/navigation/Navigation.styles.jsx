import styled from 'styled-components';

export const NavMenu = styled.ul`
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 14px;
  align-items: end;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    padding: 9px 0 0 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    padding: 7px 0 0 0;
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    padding: 0 0 5px 0;
  }
`;

export const NavBtn = styled.li`
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  line-height: 1.2;
  text-transform: uppercase;
  color: #9b9faa;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #7a7a88;
  }

  &:active {
    color: #212121;
  }
`;

export const OverlayNavContainer = styled.div`
  display: flex;
  align-items: center;
  height: inherit;

  @media screen and (max-width: 767px) {
    min-height: 488px;
  }

  @media screen and (min-width: 768px) {
    min-height: 944px;
  }
`;

export const OverlayNavMenu = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  width: fit-content;

  @media screen and (max-width: 767px) {
    margin: 60px auto 356px;
  }

  @media screen and (min-width: 768px) {
    margin: 100px auto 758px;
    min-height: 86px;
  }
`;

export const OverlayNavBtn = styled.li`
  text-transform: uppercase;
  color: #9b9faa;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  font-weight: bold;
  line-height: 1.2;
  letter-spacing: 0.04em;

  &:hover {
    color: #f2f2f2;
  }

  &:active {
    color: white;
  }

  @media screen and (max-width: 767px) {
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
