import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const defaultStyle = variant => ({
  padding: '13px 25px',
  fontSize: 14,
  fontWeight: 'bold',
  letterSpacing: '0.04em',
  lineHeight: 1.2,
  textTransform: 'none',
  backgroundColor: '#FC842D',
  borderRadius: '30px',
  boxShadow:
    variant === 'contained' ? '0 4px 10px 0 rgba(255,132,45,0.5)' : 'none',
  width: 'fit-content',
  transition: 'box-shadow 0.3s ease, transform 0.2s ease',

  '&:hover': {
    backgroundColor: '#FC842D',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,0.2)',
  },

  '&:active': {
    boxShadow: '0 2px 5px 0 rgba(0,0,0,0.2)',
    transform: 'translateY(2px)',
  },
});

export const ButtonComp = ({
  children,
  type = 'button',
  style,
  variant = 'contained',
  onClick,
}) => {
  return (
    <Button
      disableRipple
      onClick={onClick}
      style={style}
      type={type}
      variant={variant}
      sx={defaultStyle(variant)}
    >
      {children}
    </Button>
  );
};

ButtonComp.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
  variant: PropTypes.string,
  onClick: PropTypes.func,
};
