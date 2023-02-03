import {
   Box,
   Button,
   TextField,
   Select,
   MenuItem,
   InputLabel,
   FormControl,
   Stack,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';

function CreateMess() {
   const navigate = useNavigate();

   return (
      <Stack spacing={2}>
         <Box>
            <TextField fullWidth label='Mess Name' />
         </Box>
         <Box>
            <TextField fullWidth label='Location' />
         </Box>

         <Box>
            <FormControl fullWidth>
               <InputLabel id='demo-simple-select-autowidth-label'>
                  Role
               </InputLabel>
               <Select
                  labelId='demo-simple-select-autowidth-label'
                  id='demo-simple-select-autowidth'
                  fullWidth
                  label='Age'
               >
                  <MenuItem value={10}>I am the maneger</MenuItem>
                  <MenuItem value={21}>I am the owner</MenuItem>
               </Select>
            </FormControl>
         </Box>

         <Box>
            <Stack spacing={2} direction='row'>
               <TextField fullWidth label='Requirements' />
               <FormControl sx={{ minWidth: 90 }}>
                  <InputLabel id='demo-simple-select-autowidth-label'>
                     Type
                  </InputLabel>
                  <Select
                     labelId='demo-simple-select-autowidth-label'
                     id='demo-simple-select-autowidth'
                     label='Age'
                  >
                     <MenuItem value={10}>Text</MenuItem>
                     <MenuItem value={21}>File</MenuItem>
                  </Select>
               </FormControl>

               <Button variant='contained'>
                  <AddIcon />
               </Button>
            </Stack>
         </Box>
         <Box>
            <TextField fullWidth multiline rows={4} label='Description' />
         </Box>
         <Button variant='contained' onClick={() => navigate('/app')} fullWidth>
            <AddIcon /> Create
         </Button>
         <Button
            variant='contained'
            color='secondary'
            onClick={() => navigate('/mass')}
            fullWidth
         >
            Back
         </Button>
      </Stack>
   );
}

export default CreateMess;
