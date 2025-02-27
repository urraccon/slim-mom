import styled from 'styled-components';

export const Container = styled.div`
  @media screen and (max-width: 767px) {
    height: 204.5px;
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
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 767px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    height: 244px;
  }

  @media screen and (min-width: 768px) {
    gap: 16px;
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
  }

  @media screen and (min-width: 1280px) {
    height: 271px;
  }
`;

export const Message = styled.span`
  font-size: 14px;
  letter-spacing: 0.04em;
  color: #212121;
  text-align: center;
`;
