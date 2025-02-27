import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const defaultStyle = (mobile, value) => ({
  width: mobile ? '85.7%' : '100%',

  '& label': {
    fontSize: 14,
    letterSpacing: '0.04em',
    lineHeight: '1.2',
    color: '#9B9FAA',
    fontWeight: 'bold',
    transform: 'none',
    transition:
      'opacity 200ms cubic-bezier(0.0, 0, 0.2, 1), color 200ms cubic-bezier(0.0, 0, 0.2, 1)',
    opacity: value ? 0 : 1,
    marginBottom: mobile ? '8px' : '20px',
  },

  '&:hover label': {
    opacity: 0,
    color: '#9B9FAA',
    transform: 'none',
  },

  '& div::before': {
    borderColor: '#e0e0e0',
  },

  '& input': {
    paddingTop: 0,
    paddingBottom: mobile ? '8px' : '20px',
    height: 'auto',
  },

  '& .MuiInputBase-root': {
    margin: 0,
    fontSize: 14,
    letterSpacing: '0.04em',
    color: '#212121',
    lineHeight: '1.2',
  },

  '& .MuiFormLabel-root.Mui-focused': {
    opacity: 0,
    color: '#9b9faa',
  },

  '& .MuiInputBase-root.MuiInput-underline:hover:before': {
    borderBottom: '1px solid #e0e0e0',
  },

  '& .MuiInput-underline:after': {
    border: 'none',
    transition: 'none',
    transform: 'none',
  },

  '& .MuiFormLabel-root.Mui-error': {
    color: '#d32f2f',
  },

  '& .MuiInputBase-root.MuiInput-underline.Mui-error:hover:before': {
    borderBottom: '1px solid #d32f2f',
  },
});

export const Field = ({
  error,
  type = 'text',
  id,
  label,
  value,
  onChange,
  style,
  inputStyle,
  labelStyle,
}) => {
  const mobile = useMediaQuery({ maxWidth: 767 });

  return (
    <TextField
      sx={defaultStyle(mobile, value)}
      error={error}
      type={type}
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      variant="standard"
      inputProps={{ style: inputStyle, autoComplete: 'off' }}
      style={style}
      InputLabelProps={{ style: labelStyle }}
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
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};
