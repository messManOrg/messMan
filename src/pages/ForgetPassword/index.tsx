import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout';

export const ForgetPassword: React.FC = () => {
   return (
      <AuthLayout>
         <Typography variant='h4' gutterBottom sx={{ textAlign: 'center' }}>
            Forget Password
         </Typography>

         <Box sx={{ my: '1rem' }}>
            <TextField
               sx={{ width: '100%' }}
               label='Email'
               variant='outlined'
               type='email'
            />
         </Box>
         <Button variant='contained' sx={{ width: '100%' }} color='warning'>
            Forget Password
         </Button>
         <Typography sx={{ my: '10px' }}>
            Don't have an Account?{' '}
            <Link style={{ textDecoration: 'none' }} to='/register'>
               Register here
            </Link>
         </Typography>
      </AuthLayout>
   );
};
