import { useMediaQuery } from 'react-responsive';
import {
  ModalNavBtn,
  ModalNavMenu,
  NavBtn,
  NavMenu,
} from './Navigation.styles';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { ModalComp } from 'components/common/components/Modal';

const btnStyle = {
  color: 'black',
  minWidth: 0,
  padding: 0,
  margin: 0,
  height: 'fit-content',
  marginBottom: '10px',
  alignSelf: 'end',
};

const activeBtn = {
  all: 'unset',
  color: '#212121',
};

const navLinkStyle = {
  all: 'unset',
};

export const Navigation = ({ type }) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const [open, setOpen] = useState(false);

  return (
    <>
      {type === 'private' &&
        (isDesktop ? (
          <NavMenu>
            <NavBtn>
              <NavLink
                to="diary"
                style={({ isActive }) => {
                  if (isActive) {
                    return activeBtn;
                  } else {
                    return navLinkStyle;
                  }
                }}
              >
                Diary
              </NavLink>
            </NavBtn>
            <NavBtn>
              <NavLink
                to="calculator"
                style={({ isActive }) => {
                  if (isActive) {
                    return activeBtn;
                  } else {
                    return navLinkStyle;
                  }
                }}
              >
                Calculator
              </NavLink>
            </NavBtn>
          </NavMenu>
        ) : open ? (
          <Button sx={btnStyle}>
            <CloseIcon onClick={() => setOpen(false)} />
          </Button>
        ) : (
          <Button sx={btnStyle}>
            <MenuIcon onClick={() => setOpen(true)} />
          </Button>
        ))}
      {type === 'public' && (
        <NavMenu>
          <NavBtn>
            <NavLink
              to="login"
              style={({ isActive }) => {
                if (isActive) {
                  return activeBtn;
                } else {
                  return navLinkStyle;
                }
              }}
            >
              Log in
            </NavLink>
          </NavBtn>
          <NavBtn>
            <NavLink
              to="register"
              style={({ isActive }) => {
                if (isActive) {
                  return activeBtn;
                } else {
                  return navLinkStyle;
                }
              }}
            >
              Registration
            </NavLink>
          </NavBtn>
        </NavMenu>
      )}
      <ModalComp open={open} type="navigation">
        <ModalNavMenu>
          <ModalNavBtn>
            <NavLink to="diary" style={navLinkStyle}>
              Diary
            </NavLink>
          </ModalNavBtn>
          <ModalNavBtn>
            <NavLink to="calculator" style={navLinkStyle}>
              Calculator
            </NavLink>
          </ModalNavBtn>
        </ModalNavMenu>
      </ModalComp>
    </>
  );
};

Navigation.propTypes = {
  type: PropTypes.string,
};
