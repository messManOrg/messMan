import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
   Avatar,
   Card,
   CardContent,
   IconButton,
   Stack,
   Typography,
} from '@mui/material';
import { Logout } from '@mui/icons-material';
import Layout from '../../components/Layout';
import { RoutePaths } from '../../enums/routes';
import { useAuth } from '../../store/auth/Provider';
import MealStatusButton from './MealStatusButton';
import GuestMealStatusButton from './GuestMealStatusButton';
import { FabStyled } from './styles';

const Profile: React.FC = () => {
   const { currentUser, signOut } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const parmanentAddress = 'Pamanent Address';
   const phoneNumber = currentUser?.phoneNumber || '01xxxxxxxxx';

   const handleLogout = useCallback(() => {
      signOut(() => {
         navigate(RoutePaths.Login, { state: location });
      });
   }, [navigate, location, signOut]);

   return (
      <Layout>
         <Stack spacing={1}>
            <Card>
               <CardContent>
                  <Stack paddingY={1} alignItems='center' spacing={1}>
                     <Avatar sx={{ width: 56, height: 56 }}>
                        {currentUser?.displayName?.charAt(0)}
                     </Avatar>

                     <Stack alignItems='center'>
                        <Typography fontWeight='medium' variant='h5'>
                           {currentUser?.displayName}
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

            <FabStyled>
               <IconButton onClick={handleLogout}>
                  <Logout />
               </IconButton>
            </FabStyled>
         </Stack>
      </Layout>
   );
};

export default Profile;
