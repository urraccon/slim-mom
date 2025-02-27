import styled from 'styled-components';
import desktopBg from './images/diary-page-desktop-bg.png';

export const Section = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  z-index: -1;
  overflow: hidden;
`;

export const Layout = styled.div`
  position: absolute;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f0f1f3;
  }

  &::-webkit-scrollbar-thumb {
    background: #264061;
  }

  @media screen and (max-width: 767px) {
    height: calc(100vh - 121.6px);
    top: 121.6px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    top: 81.6px;
    height: calc(100vh - 81.6px);
  }

  @media screen and (min-width: 1280px) {
    height: inherit;
  }
`;

export const Container = styled.div`
  display: flex;
  height: 100%;

  @media screen and (max-width: 767px) {
    gap: 41px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 48px;
  }

  @media screen and (max-width: 1279px) {
    flex-direction: column;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    width: 97.5%;
    margin: auto;
    max-width: 1440px;
    min-height: 850px;
  }
`;

export const Leaf = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  z-index: -2;
  background-image: url(${desktopBg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`;

export const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -3;
  background: linear-gradient(to right, white 59.6%, #f0f1f3 40.4%);
  max-width: 1477px;

  @media screen and (min-width: 1280px) and (max-height: 850px) {
    transform: translateX(-50.25%);
  }
`;

export const OuterBackground = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: -4;
  background: linear-gradient(to right, white 59.6%, #f0f1f3 40.4%);
`;
