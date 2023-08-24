import { useLocation, useNavigate } from 'react-router-dom';
import { Avatar, Card, CardContent, Stack, Typography } from '@mui/material';
import fetcher from 'api/fetcher';
import { RoutePaths } from 'enums/routes';
import { useAuth, useAuthActions } from 'store/auth/Provider';
import useSWRMutation from 'swr/mutation';
import { useProfile } from './api';
import GuestMeal from './components/GuestMeal';
import LogoutButton from './components/LogoutButton';
import MainMeal from './components/MainMeal';

const Profile: React.FC = () => {
   const { currentUser } = useAuth();
   const { signOut } = useAuthActions();
   const navigate = useNavigate();
   const location = useLocation();
   const { data: profile } = useProfile();

   const { trigger } = useSWRMutation('/logout', url =>
      fetcher(url, { method: 'POST' })
   );

   function handleLogout() {
      trigger().then(() => {
         signOut(() => {
            navigate(RoutePaths.Login, {
               state: { from: location },
            });
         });
      });
   }

   return (
      <Stack spacing={1}>
         <Card>
            <CardContent>
               <Stack paddingY={1} alignItems='center' spacing={1}>
                  <Avatar sx={{ width: 100, height: 100 }}>
                     {currentUser.name?.charAt(0)}
                  </Avatar>

                  <Stack alignItems='center'>
                     <Typography fontWeight='medium' variant='h5'>
                        {currentUser.name}
                     </Typography>
                     <Typography variant='caption'>
                        {profile?.address}
                     </Typography>
                     <Typography fontWeight='light' variant='subtitle2'>
                        {currentUser.phone}
                     </Typography>
                  </Stack>
               </Stack>
            </CardContent>
         </Card>

         <MainMeal />
         <GuestMeal />

         <LogoutButton onClick={handleLogout} />
      </Stack>
   );
};

export default Profile;
