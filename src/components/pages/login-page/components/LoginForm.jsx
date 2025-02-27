import { ButtonComp } from 'components/common/components/Button';
import {
  Buttons,
  Container,
  Content,
  Fields,
  Form,
  Title,
} from './LoginForm.styles';
import { Field } from 'components/common/components/Field';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import {
  emailValidation,
  passValidation,
} from 'components/common/services/validator';
import { useDispatch } from 'react-redux';
import { login } from 'components/redux/auth/operations';

const registerBtnStyle = {
  backgroundColor: 'white',
  border: '2px solid #FC842D',
  color: '#FC842D',
};

const btnStyle = {
  lineHeight: 1.3,
  padding: 0,
  width: 182,
  height: 44,
};

const fieldStyle = {
  width: '100%',
};

const inputStyle = {
  paddingBottom: 20,
};

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const dispatch = useDispatch();

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
    <Container>
      <Content>
        <Title>Log in</Title>
        <Form onSubmit={handleSubmit}>
          <Fields>
            <Field
              error={emailErr}
              id="email"
              type="email"
              label="Email *"
              style={fieldStyle}
              value={email}
              onChange={evt => setEmail(evt.target.value)}
              inputStyle={inputStyle}
            />
            <Field
              error={passErr}
              id="password"
              type="password"
              label="Password *"
              style={fieldStyle}
              value={pass}
              onChange={evt => setPass(evt.target.value)}
              inputStyle={inputStyle}
            />
          </Fields>
          <Buttons>
            <ButtonComp type="submit" style={btnStyle}>
              Log in
            </ButtonComp>
            <NavLink to="/register">
              <ButtonComp
                variant="outlined"
                style={{ ...btnStyle, ...registerBtnStyle }}
              >
                Register
              </ButtonComp>
            </NavLink>
          </Buttons>
        </Form>
      </Content>
    </Container>
  );
};
