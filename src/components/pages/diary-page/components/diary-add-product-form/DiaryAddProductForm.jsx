import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Fields, Form } from './DiaryAddProductForm.style';
import { Field } from 'components/common/components/Field';
import { ButtonComp } from 'components/common/components/Button';
import { ModalComp } from 'components/common/components/Modal';
import AddIcon from '@mui/icons-material/Add';
import {
  gramsValidation,
  prodNameValidation,
} from 'components/common/services/validation';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import { addDiaryProd } from 'components/redux/diary/operation';

const iconStyle = {
  width: '23.04px',
  height: '23.04px',
  color: 'white',
};

const btnStyle = {
  minWidth: 'unset',
  padding: '12.48px',
  alignSelf: 'center',
};

const mobileBtnStyle = {
  minWidth: '176px',
};

const mobileFieldStyle = {
  width: '100%',
};

const gramsFieldStyle = {
  width: '106px',
};

const gramsInputProps = {
  autocomplet: 'off',

  style: {
    direction: 'rtl',
    textAlign: 'right',
  },
};

const gramsInputLabelProps = {
  style: {
    left: 'unset',
    right: 0,
  },
};

export const DiaryAddProductForm = () => {
  const isMobile = useMediaQuery({ maxWidth: 544 });

  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState('');
  const [grams, setGrams] = useState('');
  const [prodErr, setProdErr] = useState(null);
  const [gramsErr, setGramsErr] = useState(null);
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();

    const prodNameValid = prodNameValidation(product);
    const gramsValid = gramsValidation(grams);

    if (!prodNameValid) {
      setProdErr(true);
    } else {
      setProdErr(false);
    }

    if (!gramsValid) {
      setGramsErr(true);
    } else {
      setGramsErr(false);
    }

    if (prodNameValid && gramsValid) {
      const now = dayjs();

      const diaryProductDetails = {
        product,
        grams,
        now,
      };

      dispatch(addDiaryProd(diaryProductDetails));
    }
  }

  return (
    <>
      {isMobile ? (
        <>
          <ButtonComp onClick={() => setOpen(true)} style={btnStyle}>
            <AddIcon sx={iconStyle} />
          </ButtonComp>
          <ModalComp
            type="add-diary-product-form"
            open={open}
            onClose={() => setOpen(false)}
          >
            <Form onSubmit={handleSubmit}>
              <Fields>
                <Field
                  error={prodErr}
                  id="product"
                  label="Enter product name"
                  value={product}
                  onChange={evt => setProduct(evt.target.value)}
                  style={mobileFieldStyle}
                />
                <Field
                  error={gramsErr}
                  id="grams"
                  label="Grams"
                  value={grams}
                  onChange={evt => setGrams(evt.target.value)}
                  style={mobileFieldStyle}
                />
              </Fields>
              <ButtonComp type="submit" style={mobileBtnStyle}>
                Add
              </ButtonComp>
            </Form>
          </ModalComp>
        </>
      ) : (
        <Form onSubmit={handleSubmit}>
          <Fields>
            <Field
              error={prodErr}
              id="product"
              label="Enter product name"
              value={product}
              onChange={evt => setProduct(evt.target.value)}
            />
            <Field
              error={gramsErr}
              id="grams"
              label="Grams"
              value={grams}
              onChange={evt => setGrams(evt.target.value)}
              style={gramsFieldStyle}
              inputProps={gramsInputProps}
              inputLabelProps={gramsInputLabelProps}
            />
          </Fields>
          <ButtonComp type="submit" style={btnStyle}>
            <AddIcon sx={iconStyle} />
          </ButtonComp>
        </Form>
      )}
    </>
  );
};
