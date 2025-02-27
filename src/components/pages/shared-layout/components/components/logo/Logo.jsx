import { useMediaQuery } from 'react-responsive';
import { Image } from './Logo.styles';
import mobileLogo from './images/slim-mom-mobile-logo.png';
import tabletLogo from './images/slim-mom-tablet-logo.png';
import desktopLogo from './images/slim-mom-desktop-logo.png';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const imageSource = (privacy, mobile, smallScreens) => {
  switch (privacy) {
    case 'public':
      return mobile ? mobileLogo : smallScreens ? tabletLogo : desktopLogo;
    case 'private':
      return smallScreens ? tabletLogo : desktopLogo;
    default:
      return null;
  }
};

export const Logo = ({ privacy }) => {
  const mobile = useMediaQuery({ maxWidth: 767 });
  const smallScreens = useMediaQuery({ maxWidth: 1279 });
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
      <Image
        src={imageSource(privacy, mobile, smallScreens)}
        alt="slim mom logo"
        onClick={handleClick}
      />
    </>
  );
};

Logo.propTypes = {
  privacy: PropTypes.string,
};
