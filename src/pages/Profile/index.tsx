import {
   Avatar,
   Button,
   Card,
   CardContent,
   Fab,
   Stack,
   Typography,
} from '@mui/material';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout';
import { RoutePaths } from '../../enums/routes';
import { useAuth } from '../../store/auth/Provider';
import MealStatusButton from './MealStatusButton';
import GuestMealStatusButton from './GuestMealStatusButton';

const Profile: React.FC = () => {
   const { signout } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const fullName = 'Full Name';
   const parmanentAddress = 'Pamanent Address';
   const phoneNumber = '01xxxxxxxxx';

   const handleLogout = useCallback(() => {
      signout(() => {
         navigate(RoutePaths.Login, { state: location });
      });
   }, [navigate, location, signout]);

   return (
      <Layout>
         <Stack spacing={1}>
            <Card>
               <CardContent>
                  <Stack paddingY={1} alignItems='center' spacing={1}>
                     <Avatar sx={{ width: 56, height: 56 }}>
                        {fullName.charAt(0)}
                     </Avatar>

                     <Stack alignItems='center'>
                        <Typography fontWeight='medium' variant='h5'>
                           {fullName}
                        </Typography>
                        <Typography variant='caption'>
                           {parmanentAddress}
                        </Typography>
                        <Typography fontWeight='light' variant='subtitle2'>
                           {phoneNumber}
                        </Typography>
                     </Stack>
                  </Stack>
               </CardContent>
            </Card>

            <MealStatusButton />
            <GuestMealStatusButton />

            <Fab>
               <Button onClick={handleLogout}>Log Out</Button>
            </Fab>
         </Stack>
      </Layout>
   );
};

export default Profile;
