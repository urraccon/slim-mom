import { ButtonComp } from 'components/common/components/Button';
import {
  Buttons,
  FormContainer,
  Fields,
  Form,
  FormTitle,
} from './LoginForm.styles';
import { Field } from 'components/common/components/Field';
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  emailValidation,
  passValidation,
} from 'components/common/services/validation';
import { useDispatch } from 'react-redux';
import { login } from 'components/redux/auth/operations';

const registerBtnStyle = {
  backgroundColor: 'white',
  boxShadow: 'none',
  border: '2px solid #FC842D',
  padding: '8px 23px',
  color: '#FC842D',
};

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const dispatch = useDispatch();

  const isMobile = useMediaQuery({ maxWidth: 544 });

  const fieldStyle = {
    width: isMobile && '100%',
  };

  function handleSubmit(evt) {
    evt.preventDefault();

    const emailValid = emailValidation(email);
    const passValid = passValidation(pass);

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

    if (emailValid && passValid) {
      const loginDetails = {
        email,
        pass,
      };

      dispatch(login(loginDetails));
    }
  }

  return (
    <FormContainer>
      <FormTitle>Log in</FormTitle>
      <Form onSubmit={handleSubmit}>
        <Fields>
          <Field
            error={emailErr}
            id="email"
            type="email"
            label="Email"
            required={true}
            style={fieldStyle}
            value={email}
            onChange={evt => setEmail(evt.target.value)}
          />
          <Field
            error={passErr}
            id="password"
            type="password"
            label="Password"
            required={true}
            style={fieldStyle}
            value={pass}
            onChange={evt => setPass(evt.target.value)}
          />
        </Fields>
        <Buttons>
          <ButtonComp type="submit">Log in</ButtonComp>
          <NavLink to="/register">
            <ButtonComp variant="outlined" style={registerBtnStyle}>
              Register
            </ButtonComp>
          </NavLink>
        </Buttons>
      </Form>
    </FormContainer>
  );
};
