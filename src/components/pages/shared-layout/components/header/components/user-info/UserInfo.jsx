import { Divider } from '@mui/material';
import { Container, ProfileBtn, ProfileMenu } from './UserInfo.styles';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { logout } from 'components/redux/auth/operations';

const dividerStyle = {
  height: '32px',
  border: '1px solid #e0e0e0',
};

export const UserInfo = ({ username }) => {
  const dispatch = useDispatch();

  return (
    <Container>
      <ProfileMenu>
        <ProfileBtn>{username}</ProfileBtn>
        <Divider orientation="vertical" sx={dividerStyle} />
        <ProfileBtn onClick={() => dispatch(logout())}>Exit</ProfileBtn>
      </ProfileMenu>
    </Container>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string,
};
