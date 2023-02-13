import {
   CircularProgress,
   SwipeableDrawer,
   SwipeableDrawerProps,
   Typography,
} from '@mui/material';
import { Suspense } from 'react';

// onClose is a toggler, onOpen = onClose
interface Props extends Omit<SwipeableDrawerProps, 'onOpen'> {}

export default function BottomSheet(props: Props) {
   return (
      <SwipeableDrawer
         anchor='bottom'
         open={props.open}
         onOpen={props.onClose}
         onClose={props.onClose}
         disableSwipeToOpen
         disableBackdropTransition
         ModalProps={{ keepMounted: false }}
      >
         <Suspense
            fallback={
               <Typography textAlign='center' p={2}>
                  <CircularProgress />
               </Typography>
            }
         >
            {props.children}
         </Suspense>
      </SwipeableDrawer>
   );
}
