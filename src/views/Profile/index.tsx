import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import { RoutePaths } from 'enums/routes';
import { useAuth, useAuthActions } from 'store/auth/Provider';
import MealStatusButton from './components/MealStatusButton';
import GuestMealStatusButton from './components/GuestMealStatusButton';
import LogoutButton from './components/LogoutButton';

const Profile: React.FC = () => {
   const { currentUser } = useAuth();
   const { signOut } = useAuthActions();
   const navigate = useNavigate();
   const location = useLocation();

   const permanentAddress = 'In a Galaxy, far far away!';

   function handleLogout() {
      signOut(() => {
         navigate(RoutePaths.Login, {
            state: { from: location },
         });
      });
   }

   return (
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
                        {permanentAddress}
                     </Typography>
                     <Typography fontWeight='light' variant='subtitle2'>
                        {currentUser?.phoneNumber}
                     </Typography>
                  </Stack>
               </Stack>
            </CardContent>
         </Card>

         <MealStatusButton />
         <GuestMealStatusButton />

         <LogoutButton onClick={handleLogout} />
      </Stack>
   );
};

export default Profile;
