import { Divider } from '@mui/material';
import { Container, ProfileBtn, ProfileMenu } from './UserInfo.styles';
import PropTypes from 'prop-types';

const dividerStyle = {
  height: '32px',
  border: '1px solid #e0e0e0',
};

export const UserInfo = ({ username }) => {
  return (
    <Container>
      <ProfileMenu>
        <ProfileBtn>{username}</ProfileBtn>
        <Divider orientation="vertical" sx={dividerStyle} />
        <ProfileBtn>Exit</ProfileBtn>
      </ProfileMenu>
    </Container>
  );
};

UserInfo.propTypes = {
  username: PropTypes.string,
};
