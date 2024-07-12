import { Backdrop, CircularProgress } from '@mui/material';

const backdropStyle = {
  color: '#fff',
  zIndex: theme => theme.zIndex.drawer + 1,
};

const loadingStyle = {
  color: '#FC842D',
};

export const Loader = () => {
  return (
    <Backdrop sx={backdropStyle} open={true}>
      <CircularProgress sx={loadingStyle} />
    </Backdrop>
  );
};
