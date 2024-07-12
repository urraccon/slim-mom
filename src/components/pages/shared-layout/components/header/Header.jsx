import { useMediaQuery } from 'react-responsive';
import { Container, Section } from './Header.styles';
import { Logo } from './components/logo/Logo';
import { Navigation } from './components/navigation/Navigation';
import { Divider } from '@mui/material';
import { UserInfo } from './components/user-info/UserInfo';
import { MainContainer } from './Header.styles';
import PropTypes from 'prop-types';

const dividerStyle = {
  borderColor: '#e0e0e0',
  height: '32px',
  alignSelf: 'end',
  borderWidth: '1px',
};

export const Header = ({ route }) => {
  const isMobile = useMediaQuery({ maxWidth: 544 });
  const isTablet = useMediaQuery({ maxWidth: 1024, minWidth: 545 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  return (
    <Section>
      <MainContainer>
        <Logo route={route} />
        {isDesktop && <Divider orientation="vertical" sx={dividerStyle} />}
        <Container>
          {isTablet && route === 'private' && <UserInfo username="alex" />}
          <Navigation route={route} />
        </Container>
      </MainContainer>
      {(isMobile || isDesktop) && route === 'private' && (
        <UserInfo username="alex" />
      )}
    </Section>
  );
};

Header.propTypes = {
  route: PropTypes.string,
};
