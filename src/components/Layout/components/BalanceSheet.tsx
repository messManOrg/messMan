import { useReducer, useState } from 'react';
import { Add } from '@mui/icons-material';
import {
   Button,
   DialogContent,
   DialogTitle,
   Stack,
   TextField,
   Typography,
} from '@mui/material';

export default function BalanceSheet() {
   const [add, toggleAdd] = useReducer(state => !state, false);
   const [amount, setAmount] = useState(100);

   function handleAmount(e: React.ChangeEvent<HTMLInputElement>) {
      setAmount(Number(e.target.value));
   }

   return (
      <>
         <DialogTitle>Meal Balance</DialogTitle>

         <DialogContent>
            <Typography
               py={2}
               textAlign='center'
               variant='h1'
               fontWeight='light'
               color='warning.main'
            >
               $100
            </Typography>
         </DialogContent>

         <Stack direction='row' alignItems='stretch' gap={1.5} p={2}>
            <TextField
               type='number'
               placeholder='Amount'
               value={amount || null}
               onChange={handleAmount}
               sx={{ flex: 1 }}
            />

            <Button
               size='small'
               variant='contained'
               disabled={amount < 100 || add}
               onClick={toggleAdd}
               startIcon={<Add />}
            >
               {add ? 'Request Sent' : 'Add Money'}
            </Button>
         </Stack>
      </>
   );
}
