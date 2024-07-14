import { useMediaQuery } from 'react-responsive';
import { Image } from './Logo.styles';
import logoMobile from './images/slim-mom-logo-mobile.png';
import logoTablet from './images/slim-mom-logo-tablet.png';
import logoDesktop from './images/slim-mom-logo-desktop.png';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const Logo = ({ type }) => {
  const isMobile = useMediaQuery({ maxWidth: 544 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const linkStyle = {
    alignSelf: isDesktop && 'end',
  };

  return (
    <>
      {type === 'private' && (
        <>
          <NavLink to="/" style={linkStyle}>
            <Image
              src={isTablet ? logoTablet : logoDesktop}
              alt="slim mom logo"
            />
          </NavLink>
        </>
      )}
      {type === 'public' && (
        <>
          <NavLink to="/" style={linkStyle}>
            <Image
              src={isMobile ? logoMobile : isTablet ? logoTablet : logoDesktop}
              alt="slim mom logo"
            />
          </NavLink>
        </>
      )}
    </>
  );
};

Logo.propTypes = {
  type: PropTypes.string,
};
