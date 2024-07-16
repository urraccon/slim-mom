import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

export const Field = ({
  error,
  type = 'text',
  id,
  label,
  value,
  onChange,
  style,
  inputProps = {
    autoComplete: 'off',
  },
  inputLabelProps,
}) => {
  const mobile = useMediaQuery({ maxWidth: 544 });

  const defaultStyle = {
    width: '240px',

    '& label': {
      fontSize: '14px',
      letterSpacing: '0.56px',
      lineHeight: 'normal',
      color: '#9B9FAA',
      fontWeight: 700,
      transform: 'unset',
      transition: 'opacity 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
      opacity: value ? 0 : 1,
      marginBottom: '12px',
    },

    '&:hover label': {
      opacity: 0,
      color: '#9B9FAA',
      transform: 'unset',
      transition: 'opacity 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms',
    },

    '& div::before': {
      borderColor: '#e0e0e0',
    },

    '& .MuiInputBase-root:hover::before': {
      borderColor: '#9B9FAA',
    },

    '& div::after': {
      borderColor: '#9B9FAA',
    },

    '&:hover div::after': {
      borderColor: '#9B9FAA',
    },

    '& input': {
      fontSize: '14px',
      letterSpacing: '0.56px',
      height: '17.6px',
      paddingTop: 0,
      paddingBottom: mobile ? '8px' : '20px',
    },

    '& .MuiInputBase-root': {
      margin: 'unset',
    },

    '& .MuiFormLabel-root.Mui-focused': {
      opacity: 0,
    },
  };

  return (
    <TextField
      sx={defaultStyle}
      error={error}
      type={type}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      variant="standard"
      inputProps={inputProps}
      style={style}
      InputLabelProps={inputLabelProps}
    ></TextField>
  );
};

Field.propTypes = {
  error: PropTypes.bool,
  type: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  style: PropTypes.object,
  inputProps: PropTypes.object,
  inputLabelProps: PropTypes.object,
};
