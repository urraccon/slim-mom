import { useEffect } from 'react';
import { Box, Modal } from '@mui/material';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';
import { Button } from '@mui/material';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import CloseIcon from '@mui/icons-material/Close';

const navBoxStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  backgroundColor: '#264061',
  outline: 'none',
};

const navBackdropProps = {
  style: {
    height: 'calc(100% - 80px)',
    top: '80px',
  },
};

const navModalStyle = {
  height: 'calc(100% - 80px)',
  top: '80px',
};

const returnBtnStyle = {
  width: '100%',
  height: '40px',
  borderRadius: 0,
  backgroundColor: '#EFF1F3',
  color: '#9B9FAA',
  justifyContent: 'start',
  paddingLeft: '20px',

  '&:hover': {
    backgroundColor: '#EFF1F3',
  },
};

const returnIconStyle = {
  width: '12px',
  color: 'black',
  stroke: 'black',
  strokeWidth: 1,
};

const closeIconStyle = {
  color: 'black',
  height: '20px',
  width: '20px',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '20px',
  right: '20px',
  padding: 0,
  minWidth: 'unset',
  color: 'black',
};

export const ModalComp = ({ children, type, open, onClose }) => {
  const isMobile = useMediaQuery({ maxWidth: 544 });
  const isTablet = useMediaQuery({ minWidth: 545 });

  const dailyCalBoxStyle = {
    width: '100%',
    height: isTablet ? '572px' : '100%',
    maxWidth: isTablet && '672px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    outline: 'none',
  };

  const dailyCalBackdrop = {
    style: {
      top: isMobile && '80px',
    },
  };

  const dailyCalModalStyle = {
    top: isMobile && '80px',
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
          BackdropProps={navBackdropProps}
          sx={navModalStyle}
        >
          <Box sx={navBoxStyle}>{children}</Box>
        </Modal>
      )}
      {type === 'daily-calories' && (
        <Modal
          open={open}
          onClose={onClose}
          BackdropProps={dailyCalBackdrop}
          sx={dailyCalModalStyle}
        >
          <Box sx={dailyCalBoxStyle}>
            {isTablet ? (
              <Button sx={closeBtnStyle} onClick={onClose}>
                <CloseIcon sx={closeIconStyle} />
              </Button>
            ) : (
              <Button sx={returnBtnStyle} onClick={onClose}>
                <KeyboardReturnIcon sx={returnIconStyle} />
              </Button>
            )}
            {children}
          </Box>
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

// import styled from 'styled-components';

// export const Content = styled.div`
//   padding: 64px 102px 80px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// `;

// export const Calories = styled.div`
//   margin-bottom: 32px;
// `;

// export const CaloriesText = styled.p`
//   margin: 0;
//   margin-bottom: 20px;
//   font-size: 26px;
//   font-weight: 700;
//   line-height: 36.4px;
//   text-align: center;
//   color: #212121;
// `;

// export const CaloriesValue = styled.p`
//   margin: 0;
//   font-size: 48px;
//   font-weight: 700;
//   letter-spacing: 1.92px;
//   text-align: center;
//   color: #264061;
// `;

// export const Space = styled.span`
//   font-size: 26px;
// `;

// export const Kcal = styled.span`
//   font-size: 16px;
// `;

// export const Foods = styled.div`
//   margin-bottom: 40px;
//   width: 330px;
// `;

// export const FoodsText = styled.div`
//   margin-bottom: 20px;
//   font-size: 14px;
//   font-weight: 700;
//   letter-spacing: 0.56px;
//   color: #212121;
// `;

// export const FoodList = styled.ul`
//   padding: 0;
//   margin: 0;
//   list-style-type: none;

//   li:last-child {
//     margin-bottom: 0;
//   }
// `;

// export const Food = styled.li`
//   margin-bottom: 14px;
//   font-size: 14px;
//   letter-spacing: 0.56px;
//   color: #9b9faa;
// `;
