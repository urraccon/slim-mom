import { useEffect } from 'react';
import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

const navigationBoxStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: '#264061',
  outline: 'none',
};

const navigationBackdropProps = {
  style: {
    height: 'calc(100% - 80px)',
    top: '80px',
  },
};

const navigationModalStyle = {
  height: 'calc(100% - 80px)',
  top: '80px',
};

export const ModalComp = ({ children, type, open, onClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 544 });

  const dailyCaloriesIntakeBoxStyle = {
    width: isMobile ? '100%' : '672px',
    height: isMobile ? '100%' : '572px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    outline: 'none',
  };

  const dailyCaloriesIntakeBackdropProps = {
    invisible: isMobile && true,
  };

  useEffect(() => {
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  });

  const keyHandler = evt => {
    if (evt.key === 'Escape') {
    }
  };

  return (
    <>
      {type === 'navigation' && (
        <Modal
          open={open}
          onClose={onClose}
          BackdropProps={navigationBackdropProps}
          sx={navigationModalStyle}
        >
          <Box sx={navigationBoxStyle}>{children}</Box>
        </Modal>
      )}
      {type === 'dialyCaloriesIntake' && (
        <Modal
          open={open}
          onClose={onClose}
          BackdropProps={dailyCaloriesIntakeBackdropProps}
        >
          <Box sx={dailyCaloriesIntakeBoxStyle}>{children}</Box>
        </Modal>
      )}
    </>
  );
};

ModalComp.propTypes = {
  type: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
};

// import { Button, Divider } from '@mui/material';
// import {
//   Calories,
//   CaloriesText,
//   CaloriesValue,
//   Content,
//   Food,
//   FoodList,
//   Foods,
//   FoodsText,
//   Kcal,
//   Space,
// } from './Modal.styles';
// import CloseIcon from '@mui/icons-material/Close';
// import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

// const startBtnStyle = {
//   padding: '13px 25px',
//   fontSize: '14px',
//   fontWeight: 700,
//   lineHeight: '17px',
//   letterSpacing: '0.56px',
//   textTransform: 'none',
//   backgroundColor: '#FC842D',
//   borderRadius: '20px',
//   boxShadow: '0 4px 10px 0 rgba(255,132,45,0.5)',

//   '&:hover': {
//     backgroundColor: '#FC842D',
//   },
// };

// const kbReturnIconStyle = {
//   marginLeft: '20px',
//   width: '16px',
//   height: '16px',
//   stroke: 'black',
//   strokeWidth: '1px',
// };

// const dividerStyle = {
//   height: '1px',
//   marginBottom: isMobile ? '20px' : '12px',
//   borderColor: '#E0E0E0',
// };

// const closeBtnStyle = {
//   width: isMobile && '100%',
//   height: isMobile && '40px',
//   minWidth: 0,
//   padding: 0,
//   margin: 0,
//   position: !isMobile && 'absolute',
//   top: !isMobile && '30px',
//   right: !isMobile && '40px',
//   justifyContent: 'left',
//   color: 'black',
//   backgroundColor: isMobile && '#EFF1F3',
//   borderRadius: isMobile && '0',
//   boxShadow: 'none',

//   '&:hover': {
//     backgroundColor: '#EFF1F3',
//     boxShadow: 'none',
//   },
// };

//  <Button
//           onClick={() => dispatch(closeModal())}
//           variant={isMobile && 'contained'}
//           sx={closeBtnStyle}
//         >
//           {isMobile ? (
//             <KeyboardReturnIcon sx={kbReturnIconStyle} />
//           ) : (
//             <CloseIcon fontSize="small" />
//           )}
//         </Button>
//         <Content
//           style={{
//             padding: isMobile && '41px 20px 0',
//           }}
//         >
//           <Calories>
//             <CaloriesText
//               style={{
//                 marginBottom: isMobile && '41px',
//                 fontSize: isMobile && '18px',
//                 lineHeight: isMobile && '25.2px',
//                 textAlign: isMobile && 'left',
//               }}
//             >
//               Your recommended daily calorie intake is
//             </CaloriesText>
//             <CaloriesValue>
//               {kcal}
//               <Space> </Space>
//               <Kcal>kcal</Kcal>
//             </CaloriesValue>
//           </Calories>
//           <Foods
//             style={{
//               width: isMobile && '100%',
//             }}
//           >
//             <Divider
//               variant="fullwidth"
//               orientation="horizontal"
//               sx={dividerStyle}
//             />
//             <FoodsText>Foods you should not eat</FoodsText>
//             <FoodList>
//               <Food>1. Flour products</Food>
//               <Food>2. Milk</Food>
//               <Food>3. Red meat</Food>
//               <Food>4. Smoked meats</Food>
//             </FoodList>
//           </Foods>
//           <Button variant="contained" sx={startBtnStyle}>
//             Start losing weight
//           </Button>
//         </Content>
