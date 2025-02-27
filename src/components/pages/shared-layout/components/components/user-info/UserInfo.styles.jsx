import styled from 'styled-components';

export const Wrapper = styled.div`
  @media screen and (max-width: 767px) {
    height: 40px;
    background-color: #eff1f3;
    display: flex;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    margin-bottom: 6px;
  }
`;

export const Container = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  align-items: end;

  @media screen and (max-width: 767px) {
    gap: 16px;
    max-width: 450px;

    width: 100%;
    justify-content: end;
    width: 87.5%;
    margin: auto;
  }

  @media screen and (min-width: 768px) {
    margin: 0;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    gap: 15px;
  }

  @media screen and (min-width: 1280px) {
    gap: 20px;
  }
`;

export const Username = styled.li`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: #212121;
  text-transform: capitalize;
  line-height: 1.2;
`;

export const LogoutBtn = styled.li`
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.04em;
  color: #9b9faa;
  text-transform: capitalize;
  line-height: 1.2;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    color: #7a7a88;
  }

  &:active {
    color: #212121;
  }

  @media screen and (min-width: 1280px) {
    width: 50px;
  }
`;
