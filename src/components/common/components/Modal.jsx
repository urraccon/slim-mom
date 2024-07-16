import { useEffect } from 'react';
import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Button } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import CloseIcon from '@mui/icons-material/Close';

const dailyCalReturnBtnStyle = {
  width: '100%',
  height: '40px',
  borderRadius: 0,
  backgroundColor: '#EFF1F3',
  color: '#9B9FAA',
  justifyContent: 'start',
  paddingLeft: '20px',
};

const returnIconStyle = {
  width: '12px',
  color: 'black',
  stroke: 'black',
  strokeWidth: 1,
};

const closeBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: 0,
  minWidth: 'unset',
  color: 'black',
};

const closeIconStyle = {
  color: 'black',
  height: '20px',
  width: '20px',
};

const navModalStyle = {
  height: 'calc(100% - 80px)',
  top: '80px',
};

const navBackdropProps = {
  style: {
    height: 'calc(100% - 80px)',
    top: '80px',
  },
};

const navBoxStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: '#264061',
};

const addDiaryProdModalStyle = {
  height: 'calc(100% - 120px)',
  top: '120px',
};

const addDiaryProdBackdropProps = {
  style: {
    height: 'calc(100% - 120px)',
    top: '120px',
  },
};

const addDiaryProdBoxStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: 'white',
};

const addDiaryProdReturnBtnStyle = {
  width: '50%',
  height: '40px',
  borderRadius: 0,
  color: '#9B9FAA',
  justifyContent: 'start',
  paddingLeft: '20px',
  position: 'absolute',
  top: '-40px',
};

export const ModalComp = ({ children, type, open, onClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 544 });
  const isTablet = useMediaQuery({ minWidth: 545 });

  const dailyCalModalStyle = {
    top: isMobile && '80px',
  };

  const dailyCalBackdropProps = {
    style: {
      top: isMobile && '80px',
    },
  };

  const dailyCalBoxStyle = {
    width: '100%',
    height: isTablet ? '572px' : '100%',
    maxWidth: isTablet ? '672px' : 'unset',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
  };

  useEffect(() => {
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  });

  const keyHandler = evt => {
    if (evt.key === 'Escape') {
    }
  };

  return (
    <>
      <Modal
        open={open}
        onClose={onClose}
        BackdropProps={
          type === 'navigation'
            ? navBackdropProps
            : type === 'daily-calories'
            ? dailyCalBackdropProps
            : type === 'add-product-form' && addDiaryProdBackdropProps
        }
        sx={
          type === 'navigation'
            ? navModalStyle
            : type === 'daily-calories'
            ? dailyCalModalStyle
            : type === 'add-diary-product-form' && addDiaryProdModalStyle
        }
      >
        <Box
          sx={
            type === 'navigation'
              ? navBoxStyle
              : type === 'daily-calories'
              ? dailyCalBoxStyle
              : type === 'add-product-form' && addDiaryProdBoxStyle
          }
        >
          {type === 'add-diary-product-form' && (
            <Button onClick={onClose} sx={addDiaryProdReturnBtnStyle}>
              <KeyboardReturnIcon sx={returnIconStyle} />
            </Button>
          )}
          {type === 'daily-calories' && isTablet ? (
            <Button sx={closeBtnStyle} onClick={onClose}>
              <CloseIcon sx={closeIconStyle} />
            </Button>
          ) : (
            type === 'daily-calories' && (
              <Button sx={dailyCalReturnBtnStyle} onClick={onClose}>
                <KeyboardReturnIcon sx={returnIconStyle} />
              </Button>
            )
          )}
          {children}
        </Box>
      </Modal>
    </>
  );
};

ModalComp.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};
