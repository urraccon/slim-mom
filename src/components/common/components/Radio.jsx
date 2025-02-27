import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  SvgIcon,
} from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const formStyle = largeScreens => ({
  maxWidth: largeScreens ? 'none' : '85.7%',
});

const labelStyle = {
  fontSize: 14,
  fontWeight: 'bold',
  letterSpacing: '0.04em',
  color: '#9B9FAA',
  lineHeight: 1.2,

  '&.Mui-focused': {
    color: '#9B9FAA',
  },
};

const radioGrpStyle = largeScreens => ({
  marginTop: largeScreens ? '20px' : '8px',
  borderTop: largeScreens ? '1px solid #e0e0e0' : 'none',

  '& :last-child': {
    marginRight: 0,
  },
});

const radioStyle = largeScreens => ({
  margin: largeScreens ? '8px 11.7% 0 0' : '0 10.05% 0 0',

  '&:hover svg': {
    color: '#fc842d',
  },

  '& svg': {
    color: '#e0e0e0',
  },

  '& .Mui-checked  svg': {
    color: '#FC842D',
  },

  '& .Mui-checked + .MuiFormControlLabel-label': {
    color: '#FC842D',
    fontWeight: 'bold',
  },

  '& .MuiFormControlLabel-label': {
    color: '#9B9FAA',
    marginLeft: largeScreens ? '4px' : '8px',
    fontSize: 14,
    lineHeight: 1.15,
    width: 13,
  },

  '& .MuiRadio-root': {
    padding: 0,
  },
});

const iconStyle = {
  fontSize: 20,
};

const RadioChecked = () => (
  <SvgIcon sx={iconStyle}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#e0e0e0"
      strokeWidth="1"
      fill="none"
    />
    <circle cx="12" cy="12" r="5" fill="#fc842d" />
  </SvgIcon>
);

const RadioIcon = () => (
  <SvgIcon sx={iconStyle}>
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="#e0e0e0"
      strokeWidth="1"
      fill="none"
    />
  </SvgIcon>
);

export const RadioComp = ({ value, onChange, options, id }) => {
  const largeScreens = useMediaQuery({ minWidth: 768 });

  return (
    <FormControl sx={formStyle(largeScreens)}>
      <FormLabel sx={labelStyle} id={id}>
        Blood Type *
      </FormLabel>
      <RadioGroup
        sx={radioGrpStyle(largeScreens)}
        value={value}
        onChange={onChange}
        row
      >
        {options?.map(option => (
          <FormControlLabel
            key={option}
            value={option}
            control={
              <Radio
                disableRipple
                checkedIcon={<RadioChecked />}
                icon={<RadioIcon />}
              />
            }
            label={option}
            sx={radioStyle(largeScreens)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

RadioComp.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  id: PropTypes.string,
};
