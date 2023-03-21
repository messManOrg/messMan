import React from 'react';
import { Stack, Typography, TextField, Button } from '@mui/material';
import DialogWrapper from 'components/DialogWrapper';

function AllUserCost() {
   const handelSubmit = (event: React.FormEvent) => {
      event.preventDefault();
   };
   return (
      <DialogWrapper>
         <form onSubmit={handelSubmit}>
            <Typography variant='h5' gutterBottom align='left'>
               Add All User Cost
            </Typography>

            <Stack spacing={3}>
               <TextField label='Title' name='title' type='text' />

               <TextField label='Amount' name='amount' type='number' />
            </Stack>

            <Button
               variant='contained'
               type='submit'
               sx={{ marginTop: 2 }}
               fullWidth
            >
               Add
            </Button>
         </form>
      </DialogWrapper>
   );
}

export default AllUserCost;
