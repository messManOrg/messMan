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
import { RoutePaths } from 'enums/routes';
import { useAuth, useAuthActions } from 'store/auth/Provider';
import MealStatusButton from './components/MealStatusButton';
import GuestMealStatusButton from './components/GuestMealStatusButton';
import { FabStyled } from './styles';

const Profile: React.FC = () => {
   const { currentUser } = useAuth();
   const { signOut } = useAuthActions();
   const navigate = useNavigate();
   const location = useLocation();

   const parmanentAddress = 'Pamanent Address';
   const phoneNumber = currentUser?.phoneNumber || '01xxxxxxxxx';

   function handleLogout() {
      signOut(() => {
         navigate(RoutePaths.Login, { state: location });
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
   );
};

export default Profile;
