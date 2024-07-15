import styled from 'styled-components';

export const StatsContainer = styled.div`
  background-color: #f0f1f3;
  padding: 40px 20px 52px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 545px) {
    min-height: unset;
    padding: 80px 0 80px 32px;
    flex-direction: row;
    gap: 80px;
  }

  @media screen and (min-width: 1025px) {
    flex-direction: column;
    padding: 149px 0 0 106px;
    max-width: 517px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 545px) {
    max-width: 288px;
    width: 100%;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.56px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #9b9faa;
`;

export const TextPiece = styled.span``;

export const Text = styled.p`
  margin: 0;
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #9b9faa;
`;
