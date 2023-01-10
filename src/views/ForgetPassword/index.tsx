import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import { RoutePaths } from 'enums/routes';

export const ForgetPassword = () => {
   return (
      <>
         <Typography variant='h4' gutterBottom align='center'>
            Forget Password
         </Typography>

         <Box marginY={1}>
            <TextField
               fullWidth
               label='Email'
               variant='outlined'
               type='email'
            />
         </Box>

         <Button variant='contained' fullWidth color='warning'>
            Forget Password
         </Button>

         <Typography marginY={2}>
            {`Don't have an Account? `}
            <Link style={{ textDecoration: 'none' }} to={RoutePaths.Register}>
               Register here
            </Link>
         </Typography>
      </>
   );
};
