import { useEffect } from 'react';
import { Box, Button, Divider, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectModal } from 'components/redux/selectors';
import { closeModal } from 'components/redux/actions';
import {
  Calories,
  CaloriesText,
  CaloriesValue,
  Content,
  Food,
  FoodList,
  Foods,
  FoodsText,
  Kcal,
  Space,
} from './Modal.styles';
import CloseIcon from '@mui/icons-material/Close';
import { useMediaQuery } from 'react-responsive';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

const startBtnStyle = {
  padding: '13px 25px',
  fontSize: '14px',
  fontWeight: 700,
  lineHeight: '17px',
  letterSpacing: '0.56px',
  textTransform: 'none',
  backgroundColor: '#FC842D',
  borderRadius: '20px',
  boxShadow: '0 4px 10px 0 rgba(255,132,45,0.5)',

  '&:hover': {
    backgroundColor: '#FC842D',
  },
};

const kbReturnIconStyle = {
  marginLeft: '20px',
  width: '16px',
  height: '16px',
  stroke: 'black',
  strokeWidth: '1px',
};

export const ModalComp = ({ kcal }) => {
  const isMobile = useMediaQuery({ maxWidth: 672 });

  const boxStyle = {
    width: isMobile ? '100%' : '672px',
    height: isMobile ? '100%' : '572px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    outline: 'none',
  };

  const dividerStyle = {
    height: '1px',
    marginBottom: isMobile ? '20px' : '12px',
    color: '#E0E0E0',
  };

  const closeBtnStyle = {
    width: isMobile && '100%',
    height: isMobile && '40px',
    minWidth: 0,
    padding: 0,
    margin: 0,
    position: !isMobile && 'absolute',
    top: !isMobile && '20px',
    right: !isMobile && '20px',
    justifyContent: 'left',
    color: 'black',
    backgroundColor: isMobile && '#EFF1F3',
    borderRadius: isMobile && '0',
    boxShadow: 'none',

    '&:hover': {
      backgroundColor: '#EFF1F3',
      boxShadow: 'none',
    },
  };

  const visible = useSelector(selectModal);
  const dispatch = useDispatch();

  useEffect(() => {
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  });

  const onClose = () => dispatch(closeModal());

  const keyHandler = evt => {
    if (evt.key === 'Escape') {
      dispatch(closeModal());
    }
  };

  return (
    <Modal
      open={visible}
      onClose={onClose}
      BackdropProps={{
        invisible: isMobile && true,
      }}
    >
      <Box sx={boxStyle}>
        <Button
          onClick={() => dispatch(closeModal())}
          variant={isMobile && 'contained'}
          sx={closeBtnStyle}
        >
          {isMobile ? (
            <KeyboardReturnIcon sx={kbReturnIconStyle} />
          ) : (
            <CloseIcon fontSize="small" />
          )}
        </Button>
        <Content
          style={{
            padding: isMobile && '41px 20px 0',
          }}
        >
          <Calories>
            <CaloriesText
              style={{
                marginBottom: isMobile && '41px',
                fontSize: isMobile && '18px',
                lineHeight: isMobile && '25.2px',
                textAlign: isMobile && 'left',
              }}
            >
              Your recommended daily calorie intake is
            </CaloriesText>
            <CaloriesValue>
              {kcal}
              <Space> </Space>
              <Kcal>kcal</Kcal>
            </CaloriesValue>
          </Calories>
          <Foods
            style={{
              width: isMobile && '100%',
            }}
          >
            <Divider
              variant="fullwidth"
              orientation="horizontal"
              sx={dividerStyle}
            />
            <FoodsText>Foods you should not eat</FoodsText>
            <FoodList>
              <Food>1. Flour products</Food>
              <Food>2. Milk</Food>
              <Food>3. Red meat</Food>
              <Food>4. Smoked meats</Food>
            </FoodList>
          </Foods>
          <Button variant="contained" sx={startBtnStyle}>
            Start losing weight
          </Button>
        </Content>
      </Box>
    </Modal>
  );
};

ModalComp.propTypes = {
  kcal: PropTypes.number,
};
