import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style-type: none;
  margin: 0;
  padding: 0;
  margin-top: 32px;
  margin-bottom: 60px;

  @media screen and (min-width: 545px) {
    margin-top: 60px;
    margin-bottom: 55px;
    gap: 16px;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: 0.56px;
  color: #212121;
`;
