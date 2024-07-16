import { useMediaQuery } from 'react-responsive';
import { Container, TabletContainer, Section } from './Header.styles';
import { Logo } from './components/logo/Logo';
import { Navigation } from './components/navigation/Navigation';
import { Divider } from '@mui/material';
import { UserInfo } from './components/user-info/UserInfo';
import PropTypes from 'prop-types';

const dividerStyle = {
  borderColor: '#e0e0e0',
  height: '32px',
  alignSelf: 'end',
  borderWidth: '1px',
};

export const Header = ({ type, username }) => {
  const mobile = useMediaQuery({ maxWidth: 544 });
  const tablet = useMediaQuery({ maxWidth: 1024, minWidth: 545 });
  const desktop = useMediaQuery({ minWidth: 1025 });

  return (
    <Section>
      <Container>
        <Logo type={type} />
        {desktop && <Divider orientation="vertical" sx={dividerStyle} />}
        <TabletContainer>
          {tablet && type === 'private' && <UserInfo username={username} />}
          <Navigation type={type} />
        </TabletContainer>
      </Container>
      {(mobile || desktop) && type === 'private' && (
        <UserInfo username={username} />
      )}
    </Section>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};
