import { Container, Fields, Form, FormTitle } from './DailyCaloriesFrom.styles';
import { ButtonComp } from 'components/common/components/Button';
import { Field } from 'components/common/components/Field';
import { useState } from 'react';
import { RadioComp } from '../../../../common/components/Radio';
import { useMediaQuery } from 'react-responsive';
import {
  ageValidation,
  heightValidation,
  weightValidation,
} from 'components/common/services/validation';
import { calcDailyCalories } from 'components/common/services/calculator';
import { ModalComp } from 'components/common/components/Modal';

export const DailyCaloriesForm = () => {
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [curWt, setCurWt] = useState('');
  const [desWt, setDesWt] = useState('');
  const [bldTyp, setBldTyp] = useState('1');
  const [heightErr, setHeightErr] = useState(false);
  const [ageErr, setAgeErr] = useState(false);
  const [curWtErr, setCurWtErr] = useState(false);
  const [desWtErr, setDesWtErr] = useState(false);
  const [open, setOpen] = useState(false);
  const [dailyCal, setDailyCal] = useState('');

  const isMobile = useMediaQuery({ maxWidth: 544 });
  const isTablet = useMediaQuery({ maxWidth: 1024 });
  const isDesktop = useMediaQuery({ minWidth: 1025 });

  const btnStyle = {
    alignSelf: isMobile ? 'center' : isTablet ? 'start' : 'end',
    left: isDesktop && '23px',
  };

  function handleSubmit(evt) {
    evt.preventDefault();
    const validHeight = heightValidation(height);
    const validAge = ageValidation(age);
    const validCurWt = weightValidation(curWt);
    const validDesWt = weightValidation(desWt);

    if (!validHeight) {
      setHeightErr(true);
    } else {
      setHeightErr(false);
    }

    if (!validAge) {
      setAgeErr(true);
    } else {
      setAgeErr(false);
    }

    if (!validCurWt) {
      setCurWtErr(true);
    } else {
      setCurWtErr(false);
    }

    if (!validDesWt) {
      setDesWtErr(true);
    } else {
      setDesWtErr(false);
    }

    if (validHeight && validAge && validCurWt && validDesWt) {
      const result = Math.round(calcDailyCalories(height, age, curWt, desWt));

      setDailyCal(result);
      setOpen(true);
    }
  }

  return (
    <>
      <Container>
        <FormTitle>Calculate your daily calorie intake right now</FormTitle>
        <Form onSubmit={handleSubmit}>
          <Fields>
            <Field
              error={heightErr}
              type="text"
              id="height"
              label="Height"
              value={height}
              onChange={evt => setHeight(evt.target.value)}
              required={true}
            />
            <Field
              error={ageErr}
              type="text"
              id="age"
              label="Age"
              value={age}
              onChange={evt => setAge(evt.target.value)}
              required={true}
            />
            <Field
              error={curWtErr}
              type="text"
              id="current-weight"
              label="Current weight"
              value={curWt}
              onChange={evt => setCurWt(evt.target.value)}
              required={true}
            />
            <Field
              error={desWtErr}
              type="text"
              id="desired-weight"
              label="Desired Weight"
              value={desWt}
              onChange={evt => setDesWt(evt.target.value)}
              required={true}
            />
            <RadioComp
              id="blood-type"
              options={[1, 2, 3, 4]}
              value={bldTyp}
              onChange={evt => {
                setBldTyp(evt.target.value);
              }}
            />
          </Fields>
          <ButtonComp style={btnStyle} type="submit">
            Start losing weight
          </ButtonComp>
          <ModalComp />
        </Form>
      </Container>
      <ModalComp
        type="daily-calories"
        open={open}
        onClose={() => setOpen(false)}
      ></ModalComp>
    </>
  );
};
