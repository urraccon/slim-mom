import { useMediaQuery } from 'react-responsive';
import {
  Box,
  PrivateContainer,
  PrivateContent,
  PrivateLayout,
  PublicContainer,
  PublicLayout,
  Section,
} from './Header.styles';
import { Logo } from './components/logo/Logo';
import { Navigation } from './components/navigation/Navigation';
import { Divider } from '@mui/material';
import { UserInfo } from './components/user-info/UserInfo';
// import { useSelector } from 'react-redux';
// import { useEffect, useState } from 'react';
// import {
//   selectLoggedIn,
//   selectUserName,
// } from 'components/redux/auth/selectors';

const dividerStyle = {
  height: 32,
  border: 0,
  borderLeft: '2px solid #e0e0e0',
};

export const Header = () => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const tablet = useMediaQuery({ maxWidth: 1279, minWidth: 768 });
  const desktop = useMediaQuery({ minWidth: 1280 });

  // const [privacy, setPrivacy] = useState('public');

  // const username = useSelector(selectUserName);
  // const loggedIn = useSelector(selectLoggedIn);

  // useEffect(() => {
  //   if (loggedIn) {
  //     setPrivacy('private');
  //   } else {
  //     setPrivacy('public');
  //   }
  // }, [loggedIn]);

  const privacy = 'private';
  const username = 'Alex';

  return (
    <Section>
      {privacy === 'public' && (
        <>
          <PublicLayout>
            <PublicContainer>
              <Logo privacy="public" />
              {desktop && (
                <>
                  <Divider orientation="vertical" sx={dividerStyle} />
                </>
              )}
              <Navigation privacy="public" />
            </PublicContainer>
          </PublicLayout>
        </>
      )}
      {privacy === 'private' && (
        <>
          <PrivateLayout>
            <PrivateContainer>
              {mobile && (
                <>
                  <PrivateContent>
                    <Box>
                      <Logo privacy="private" />
                      <Navigation privacy="private" />
                    </Box>
                  </PrivateContent>
                  <UserInfo username={username} />
                </>
              )}
              {tablet && (
                <>
                  <PrivateContent>
                    <Logo privacy="private" />
                    <Box>
                      <UserInfo username={username} />
                      <Navigation privacy="private" />
                    </Box>
                  </PrivateContent>
                </>
              )}
              {desktop && (
                <>
                  <PrivateContent>
                    <Box>
                      <Logo privacy="private" />
                      <Divider orientation="vertical" sx={dividerStyle} />
                      <Navigation privacy="private" />
                    </Box>
                    <UserInfo username={username} />
                  </PrivateContent>
                </>
              )}
            </PrivateContainer>
          </PrivateLayout>
        </>
      )}
    </Section>
  );
};
