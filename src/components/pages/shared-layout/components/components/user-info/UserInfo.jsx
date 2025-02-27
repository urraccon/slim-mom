import { Divider } from '@mui/material';
import { Container, LogoutBtn, Username, Wrapper } from './UserInfo.styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logout } from 'components/redux/auth/operations';

const dividerStyle = {
  height: '32px',
  borderRight: '2px solid #e0e0e0',
};

export const UserInfo = ({ username }) => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Container>
        <Username>{username}</Username>
        <Divider orientation="vertical" sx={dividerStyle} />
        <LogoutBtn onClick={() => dispatch(logout())}>Exit</LogoutBtn>
      </Container>
    </Wrapper>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string,
};
