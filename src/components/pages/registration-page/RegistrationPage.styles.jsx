import styled from 'styled-components';
import desktopBg from './images/registration-page-desktop-bg.jpg';
import tabletBg from './images/registration-page-tablet-bg.jpg';

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  overflow: hidden;

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    background-image: url(${tabletBg});
  }

  @media screen and (min-width: 768px) {
    background-size: cover;
    background-position: center;
    background-repet: no-repeat;
  }

  @media screen and (min-width: 1280px) {
    background-image: url(${desktopBg});
  }
`;
