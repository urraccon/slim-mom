import { useMediaQuery } from 'react-responsive';
import {
  ModalNavBtn,
  ModalNavMenu,
  NavBtn,
  NavMenu,
} from './Navigation.styles';
import MenuIcon from '@mui/icons-material/Menu';
import PropTypes from 'prop-types';
import { ModalComp } from 'components/common/components/modal/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
// import { NavLink } from 'react-router-dom';

const btnStyle = {
  color: 'black',
  minWidth: 0,
  padding: 0,
  margin: 0,
  height: 'fit-content',
  marginBottom: '10px',
  alignSelf: 'end',
};

// const activeBtn = {
//   color: '#212121',
// };

export const Navigation = ({ route }) => {
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const [open, setOpen] = useState(false);

  return (
    <>
      {route === 'private' &&
        (isDesktop ? (
          <NavMenu>
            <NavBtn>
              {/* <NavLink
          to="/user/:userId/diary"
          style={({ isActive }) =>
            isActive && activeBtn
          }
        > */}
              Diary
              {/* </NavLink> */}
            </NavBtn>
            <NavBtn>
              {/* <NavLink
          to="/user/:userId/calculator"
          style={({ isActive }) =>
            isActive && activeBtn
          }
        > */}
              Calculator
              {/* </NavLink> */}
            </NavBtn>
          </NavMenu>
        ) : (
          <>
            {open ? (
              <Button sx={btnStyle}>
                <CloseIcon onClick={() => setOpen(false)} />
              </Button>
            ) : (
              <Button sx={btnStyle}>
                <MenuIcon onClick={() => setOpen(true)} />
              </Button>
            )}
            <ModalComp open={open} type="navigation">
              <ModalNavMenu>
                <ModalNavBtn>
                  {/* <NavLink
          to="/user/:userId/diary"
          }
        > */}
                  Diary
                  {/* </NavLink> */}
                </ModalNavBtn>
                <ModalNavBtn>
                  {/* <NavLink
          to="/user/:userId/calculator"
          }
        > */}
                  Calculator
                  {/* </NavLink> */}
                </ModalNavBtn>
              </ModalNavMenu>
            </ModalComp>
          </>
        ))}
      {route === 'public' && (
        <NavMenu>
          <NavBtn>
            {/* <NavLink
          to="/login"
          style={({ isActive }) =>
            isActive && activeBtn
          }
        > */}
            Log in
            {/* </NavLink> */}
          </NavBtn>
          <NavBtn>
            {/* <NavLink
          to="/registration"
          style={({ isActive }) =>
            isActive && activeBtn
          }
        > */}
            Registration
            {/* </NavLink> */}
          </NavBtn>
        </NavMenu>
      )}
    </>
  );
};

Navigation.propTypes = {
  route: PropTypes.string,
};
