import { useMediaQuery } from 'react-responsive';
import {
  NavBtn,
  NavMenu,
  OverlayNavBtn,
  OverlayNavContainer,
  OverlayNavMenu,
} from './Navigation.styles';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ModalComp } from 'components/common/components/Modal';

const btnStyle = {
  color: '#212121',
  minWidth: 0,
  padding: 0,
  borderRadius: 0,
  transition: 'background-color 0.3s ease',
  marginBottom: '4px',

  '&:hover': {
    backgroundColor: '#f0f0f0',
  },

  '&:active': {
    backgroundColor: '#e0e0e0',
  },
};

const activeBtn = {
  color: '#212121',
};

const navLinkStyle = {
  all: 'unset',
};

const activeOverlayNavBtn = {
  color: 'white',
};

export const Navigation = ({ privacy }) => {
  const smallScreens = useMediaQuery({ maxWidth: 1279 });

  const [open, setOpen] = useState(false);

  return (
    <>
      {privacy === 'public' && (
        <NavMenu>
          <NavBtn>
            <NavLink
              to="login"
              style={({ isActive }) =>
                isActive ? { ...navLinkStyle, ...activeBtn } : navLinkStyle
              }
            >
              Log in
            </NavLink>
          </NavBtn>
          <NavBtn>
            <NavLink
              to="register"
              style={({ isActive }) =>
                isActive ? { ...navLinkStyle, ...activeBtn } : navLinkStyle
              }
            >
              Registration
            </NavLink>
          </NavBtn>
        </NavMenu>
      )}
      {privacy === 'private' &&
        (smallScreens ? (
          <>
            {open ? (
              <Button sx={btnStyle} disableRipple>
                <CloseIcon onClick={() => setOpen(false)} />
              </Button>
            ) : (
              <Button sx={btnStyle} disableRipple>
                <MenuIcon onClick={() => setOpen(true)} />
              </Button>
            )}
            <ModalComp open={open} type="navigation">
              <OverlayNavContainer>
                <OverlayNavMenu>
                  <OverlayNavBtn>
                    <NavLink
                      to="diary"
                      style={({ isActive }) =>
                        isActive
                          ? { ...navLinkStyle, ...activeOverlayNavBtn }
                          : navLinkStyle
                      }
                      onClick={() => setOpen(false)}
                    >
                      Diary
                    </NavLink>
                  </OverlayNavBtn>
                  <OverlayNavBtn>
                    <NavLink
                      to="calculator"
                      style={({ isActive }) =>
                        isActive
                          ? { ...navLinkStyle, ...activeOverlayNavBtn }
                          : navLinkStyle
                      }
                      onClick={() => setOpen(false)}
                    >
                      Calculator
                    </NavLink>
                  </OverlayNavBtn>
                </OverlayNavMenu>
              </OverlayNavContainer>
            </ModalComp>
          </>
        ) : (
          <NavMenu>
            <NavBtn>
              <NavLink
                to="diary"
                style={({ isActive }) =>
                  isActive ? { ...navLinkStyle, ...activeBtn } : navLinkStyle
                }
              >
                Diary
              </NavLink>
            </NavBtn>
            <NavBtn>
              <NavLink
                to="calculator"
                style={({ isActive }) =>
                  isActive ? { ...navLinkStyle, ...activeBtn } : navLinkStyle
                }
              >
                Calculator
              </NavLink>
            </NavBtn>
          </NavMenu>
        ))}
    </>
  );
};

Navigation.propTypes = {
  privacy: PropTypes.string,
};
