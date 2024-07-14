import { Button } from '@mui/material';
import PropTypes from 'prop-types';

const btnStyle = {
  padding: '13px 25px',
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.56px',
  textTransform: 'none',
  backgroundColor: '#FC842D',
  borderRadius: '25px',
  boxShadow: '0 4px 10px 0 rgba(255,132,45,0.5)',
  width: 'fit-content',

  '&:hover': {
    backgroundColor: '#FC842D',
  },
};

export const ButtonComp = ({ children, type = 'button', style }) => {
  return (
    <Button style={style} type={type} variant="contained" sx={btnStyle}>
      {children}
    </Button>
  );
};

ButtonComp.propTypes = {
  type: PropTypes.string,
  style: PropTypes.object,
};
