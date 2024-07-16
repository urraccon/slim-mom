import styled from 'styled-components';

export const Container = styled.div`
  height: 80px;
  display: flex;

  @media screen and (min-width: 1025px) {
    gap: 20px;
    height: unset;
  }

  @media screen and (max-width: 1024px) {
    justify-content: space-between;
    width: 100%;
    border-bottom: 2px solid #e0e0e0;
    padding: 20px 32px 16px;
  }

  @media screen and (max-width: 544px) {
    padding: 20px 20px 16px;
  }
`;

export const Section = styled.section`
  @media screen and (min-width: 1025px) {
    display: flex;
    align-items: end;
    justify-content: space-between;
    margin: 80px 16px 0;
  }

  @media screen and (max-width: 544px) {
    position: fixed;
    width: 100%;
    background-color: white;
  }
`;

export const TabletContainer = styled.div`
  display: flex;
  gap: 48px;
`;
