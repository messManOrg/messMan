import { Backdrop, CircularProgress } from '@mui/material';

const OverlayLoading: React.FC = () => {
   return (
      <Backdrop
         open
         sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
      >
         <CircularProgress color='inherit' />
      </Backdrop>
   );
};

export default OverlayLoading;
