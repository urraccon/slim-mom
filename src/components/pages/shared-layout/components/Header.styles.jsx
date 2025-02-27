import styled from 'styled-components';

export const Section = styled.section`
  position: fixed;
  width: 100%;

  @media screen and (max-width: 1279px) {
    background-color: white;
  }
`;

export const PublicLayout = styled.div`
  @media screen and (max-width: 1279px) {
    border-bottom: 2px solid #e0e0e0;
  }

  @media screen and (min-width: 1280px) {
    margin-top: 80px;
  }
`;

export const PublicContainer = styled.div`
  display: flex;
  margin: auto;

  @media screen and (max-width: 1279px) {
    height: 80px;
    justify-content: space-between;

    padding: 20px 0 16px;
    gap: 20px;
    align-items: center;
  }

  @media screen and (max-width: 767px) {
    max-width: 450px;
    width: 87.5%;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    max-width: 850px;
    width: 91.66%;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
    width: 97.5%;
    align-items: end;
    max-width: 1440px;
  }
`;

export const PrivateLayout = styled.div`
  @media screen and (min-width: 1280px) and (max-height: 850px) {
    margin-right: 6px;
  }

  @media screen and (min-width: 1280px) {
    background: linear-gradient(to right, white 59.6%, #f0f1f3 40.4%);
  }
`;

export const PrivateContainer = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    border-bottom: 2px solid #e0e0e0;
  }

  @media screen and (min-width: 1280px) {
    background: linear-gradient(to right, white 59.6%, #f0f1f3 40.4%);
    max-width: 1477px;
    margin: auto;
  }
`;

export const PrivateContent = styled.div`
  @media screen and (max-width: 767px) {
    border-bottom: 2px solid #e0e0e0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 91.66%;
    max-width: 850px;
    align-items: center;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }

  @media screen and (min-width: 1280px) {
    align-items: end;
    margin: 80px auto 0;
    width: 97.5%;
  }
`;

export const Box = styled.div`
  display: flex;

  @media screen and (max-width: 767px) {
    justify-content: space-between;
    width: 87.5%;
    max-width: 450px;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    gap: 48px;
  }

  @media screen and (max-width: 1279px) {
    height: 80px;
    align-items: center;
  }

  @media screen and (max-width: 767px), (min-width: 1280px) {
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    align-items: end;
  }
`;
