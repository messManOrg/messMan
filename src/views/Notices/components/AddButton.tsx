import AddIcon from '@mui/icons-material/Add';
import { Fab, IconButton, IconButtonProps, styled } from '@mui/material';

function AddButton(props: IconButtonProps) {
   return (
      <FabStyle>
         <IconButton component='span' color='inherit' {...props}>
            <AddIcon />
         </IconButton>
      </FabStyle>
   );
}

const FabStyle = styled(Fab)(({ theme }) => ({
   position: 'absolute',
   bottom: theme.spacing(9),
   right: theme.spacing(3),
}));

export default AddButton;
