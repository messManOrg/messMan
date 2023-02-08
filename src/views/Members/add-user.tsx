import {
   Box,
   Typography,
   TextField,
   Button,
   Card,
   Container,
   styled,
} from '@mui/material';
import { useState } from 'react';

function AddUser() {
   const [data, setData] = useState({
      name: '',
      phone: '',
      password: '123456',
   });
   const handelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget;
      setData(prev => ({ ...prev, [name]: value }));
   };

   const handelSubmit = (event: React.FormEvent) => {
      event.preventDefault();
   };
   return (
      <CardContainer>
         <Container maxWidth='sm'>
            <Card
               sx={{
                  py: '2rem',
                  px: '1rem',
               }}
            >
               <form onSubmit={handelSubmit}>
                  <Typography variant='h5' gutterBottom align='left'>
                     Add Member
                  </Typography>
                  <Box marginY={1.5}>
                     <TextField
                        fullWidth
                        label='Name'
                        value={data.name}
                        onChange={handelChange}
                        name='name'
                        variant='outlined'
                        type='text'
                     />
                  </Box>

                  <Box marginY={1.5}>
                     <TextField
                        fullWidth
                        label='Phone'
                        variant='outlined'
                        onChange={handelChange}
                        name='phone'
                        value={data.phone}
                        type='text'
                     />
                  </Box>
                  <Box marginY={1.5}>
                     <TextField
                        fullWidth
                        label='Password'
                        variant='outlined'
                        type='text'
                        value={data.password}
                        disabled
                     />
                  </Box>
                  <Button variant='contained' type='submit' fullWidth>
                     Add
                  </Button>
               </form>
            </Card>
         </Container>
      </CardContainer>
   );
}

const CardContainer = styled(Box)({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
   height: '80vh',
   //    width: '100vw',
});

export default AddUser;
