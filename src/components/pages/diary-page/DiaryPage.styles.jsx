import styled from 'styled-components';
import tabletBg from './images/tablet-diary-bg.jpg';
import desktopBg from './images/desktop-diary-bg.jpg';

export const Section = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 545px) {
    background-image: url(${tabletBg});
  }

  @media screen and (min-width: 1025px) {
    background-image: url(${desktopBg});
  }
`;

export const DiaryContainer = styled.div`
  padding: 40px 20px 0;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 545px) {
    padding-top: 100px;
    padding-left: 32px;
  }

  @media screen and (min-width: 1025px) {
    padding-top: 140px;
    padding-left: 16px;
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 120px;
  width: 100%;

  @media screen and (min-width: 545px) {
    top: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 80px);
  }

  @media screen and (min-width: 1025px) {
    top: 153px;
    flex-direction: row;
    height: calc(100% - 153px);
  }
`;
