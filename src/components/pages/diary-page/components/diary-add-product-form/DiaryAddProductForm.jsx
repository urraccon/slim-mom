import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Fields, Form } from './DiaryAddProductForm.style';
import { Field } from 'components/common/components/Field';
import { ButtonComp } from 'components/common/components/Button';
import { ModalComp } from 'components/common/components/Modal';
import AddIcon from '@mui/icons-material/Add';
import {
  prodNameValidation,
  quantityValidation,
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

const quantityFieldStyle = {
  width: '106px',
};

const inputProps = {
  autocomplet: 'off',

  style: {
    direction: 'rtl',
    textAlign: 'right',
  },
};

const inputLabelProps = {
  style: {
    left: 'unset',
    right: 0,
  },
};

export const DiaryAddProductForm = () => {
  const mobile = useMediaQuery({ maxWidth: 544 });

  const [open, setOpen] = useState(false);
  const [productName, setProdName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [prodNameErr, setProdNameErr] = useState(null);
  const [quantityErr, setQuantityErr] = useState(null);
  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();

    const prodNameValid = prodNameValidation(productName);
    const quantityValid = quantityValidation(quantity);

    if (!prodNameValid) {
      setProdNameErr(true);
    } else {
      setProdNameErr(false);
    }

    if (!quantityValid) {
      setQuantityErr(true);
    } else {
      setQuantityErr(false);
    }

    if (prodNameValid && quantityValid) {
      const now = dayjs();

      const diaryProductDetails = {
        productName,
        quantity,
        now,
      };

      dispatch(addDiaryProd(diaryProductDetails));
    }
  }

  return (
    <>
      {mobile ? (
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
                  error={prodNameErr}
                  id="product"
                  label="Enter product name"
                  value={productName}
                  onChange={evt => setProdName(evt.target.value)}
                  style={mobileFieldStyle}
                />
                <Field
                  error={quantityErr}
                  id="quantity"
                  label="Grams"
                  value={quantity}
                  onChange={evt => setQuantity(evt.target.value)}
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
              error={prodNameErr}
              id="product"
              label="Enter product name"
              value={productName}
              onChange={evt => setProdName(evt.target.value)}
            />
            <Field
              error={quantityErr}
              id="quantity"
              label="Grams"
              value={quantity}
              onChange={evt => setQuantity(evt.target.value)}
              style={quantityFieldStyle}
              inputProps={inputProps}
              inputLabelProps={inputLabelProps}
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
