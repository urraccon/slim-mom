import styled from 'styled-components';

export const ProfileMenu = styled.ul`
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 16px;
  align-items: end;
`;

export const ProfileBtn = styled.li`
  padding-bottom: 4px;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.56px;
  color: #9b9faa;
  text-transform: capitalize;

  &:hover {
    color: #212121;
  }
`;

export const Container = styled.div`
  @media screen and (max-width: 544px) {
    height: 40px;
    background-color: #eff1f3;
    display: flex;
    align-items: center;
    justify-content: right;
    padding-right: 20px;
  }
`;
