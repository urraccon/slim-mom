import { ButtonComp } from 'components/common/components/Button';
import { Field } from 'components/common/components/Field';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  createdPassValidation,
  emailValidation,
  nameValidation,
} from 'components/common/services/validation';
import {
  Buttons,
  Fields,
  Form,
  FormContainer,
  FormTitle,
} from './RegistrationForm.styles';
import { useDispatch } from 'react-redux';
import { register } from 'components/redux/auth/operations';

const loginBtnStyle = {
  backgroundColor: 'white',
  boxShadow: 'none',
  border: '2px solid #FC842D',
  padding: '8px 23px',
  color: '#FC842D',
};

const inputProps = {
  style: {
    paddingBottom: '20px',
  },
};

export const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const dispatch = useDispatch();

  const mobile = useMediaQuery({ maxWidth: 544 });

  const fieldStyle = {
    width: mobile && '100%',
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    const nameValid = nameValidation(name);
    const emailValid = emailValidation(email);
    const passValid = createdPassValidation(pass);

    if (!nameValid) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }

    if (!emailValid) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }

    if (!passValid) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }

    if (nameValid && emailValid && passValid) {
      const registerDetails = {
        name,
        email,
        pass,
      };

      dispatch(register(registerDetails));
    }
  }

  return (
    <FormContainer>
      <FormTitle>Register</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Fields>
          <Field
            error={nameErr}
            id="name"
            type="text"
            label="Name *"
            style={fieldStyle}
            value={name}
            onChange={evt => setName(evt.target.value)}
            inputProps={inputProps}
          />
          <Field
            error={emailErr}
            id="email"
            type="email"
            label="Email *"
            style={fieldStyle}
            value={email}
            onChange={evt => setEmail(evt.target.value)}
            inputProps={inputProps}
          />
          <Field
            error={passErr}
            id="password"
            type="password"
            label="Password *"
            style={fieldStyle}
            value={pass}
            onChange={evt => setPass(evt.target.value)}
            inputProps={inputProps}
          />
        </Fields>
        <Buttons>
          <ButtonComp type="submit">Register</ButtonComp>
          <NavLink to="/login">
            <ButtonComp variant="outlined" style={loginBtnStyle}>
              Log in
            </ButtonComp>
          </NavLink>
        </Buttons>
      </Form>
    </FormContainer>
  );
};
