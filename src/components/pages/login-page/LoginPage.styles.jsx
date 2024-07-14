import styled from 'styled-components';
import desktopBg from './images/desktop-login-bg.jpg';
import tabletBg from './images/tablet-login-bg.jpg';

export const Section = styled.section`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repet: no-repeat;

  @media screen and (min-width: 545px) {
    background-image: url(${tabletBg});
  }

  @media screen and (min-width: 1025px) {
    background-image: url(${desktopBg});
  }
`;
