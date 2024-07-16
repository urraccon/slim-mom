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

const labelStyle = {
  fontSize: '14px',
  fontWeight: 700,
  letterSpacing: '0.56px',
  color: '#9B9FAA',

  '&.Mui-focused': {
    color: '#9B9FAA',
  },
};

const radioStyle = {
  marginRight: '24px',

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
    fontWeight: 700,
  },

  '& .MuiFormControlLabel-label': {
    color: '#9B9FAA',
  },

  '& .MuiRadio-root': {
    padding: '8px',
  },
};

const formStyle = {
  maxWidth: '240px',
};

const RadioIcon = () => (
  <SvgIcon>
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

const RadioChecked = () => (
  <SvgIcon>
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

export const RadioComp = ({ value, onChange, options, id }) => {
  const mobile = useMediaQuery({ maxWidth: 544 });

  const radioGrpStyle = {
    marginTop: mobile ? '' : '5px',
    borderTop: mobile ? '' : '1px solid #e0e0e0',
    paddingLeft: '1px',

    '& :last-child': {
      marginRight: '0',
    },
  };

  return (
    <FormControl sx={formStyle}>
      <FormLabel sx={labelStyle} id={id}>
        Blood Type *
      </FormLabel>
      <RadioGroup sx={radioGrpStyle} value={value} onChange={onChange} row>
        {options?.map(option => (
          <FormControlLabel
            key={option}
            value={option}
            control={
              <Radio checkedIcon={<RadioChecked />} icon={<RadioIcon />} />
            }
            label={option}
            sx={radioStyle}
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
