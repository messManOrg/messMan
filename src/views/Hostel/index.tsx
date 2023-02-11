import * as React from 'react';
import Box from '@mui/material/Box';
import {
   Avatar,
   Button,
   Card,
   CardContent,
   CardMedia,
   List,
   ListItem,
   ListItemAvatar,
   ListItemButton,
   Stack,
   Typography,
   ListItemText,
   Chip,
} from '@mui/material';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import { useAuthActions } from 'store/auth/Provider';
import { useNavigate } from 'react-router-dom';
import { formatDate } from 'utils';

function Hostel() {
   const navigate = useNavigate();
   const auth = useAuthActions();
   const from = '/app';

   function handelJoinMess() {
      auth.userRole(() => {
         navigate(from, { replace: true });
      }, 'member');
   }

   return (
      <Box>
         <Card>
            <CardMedia
               component='img'
               alt='green iguana'
               height='140'
               image='https://mui.com/static/images/cards/contemplative-reptile.jpg'
            />
            <CardContent>
               <Stack direction={'row'} justifyContent='space-between'>
                  <Typography gutterBottom variant='h5' component='div'>
                     Hostel Name
                  </Typography>
                  <Button
                     variant='contained'
                     size='small'
                     sx={{ paddingX: 3 }}
                     onClick={handelJoinMess}
                  >
                     <AddBusinessIcon /> Join
                  </Button>
               </Stack>

               <Stack spacing={1} sx={{ marginTop: 2 }}>
                  <Typography variant='body2' color='text.secondary'>
                     Lizards are a widespread group of squamate reptiles, with
                     over 6,000 species, ranging across all continents except
                     Antarctica
                  </Typography>
                  <Stack direction={'row'} justifyContent={'space-between'}>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        Location :
                     </Typography>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        Bogura Rajshahi
                     </Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent={'space-between'}>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        Meal Rate :
                     </Typography>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        100
                     </Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent='space-between'>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        Created At :
                     </Typography>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        {formatDate(new Date())}
                     </Typography>
                  </Stack>
                  <Stack direction={'row'} justifyContent='space-between'>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        Member :
                     </Typography>
                     <Typography
                        variant='subtitle1'
                        color='text.secondary'
                        component='div'
                     >
                        20
                     </Typography>
                  </Stack>
                  <UserLIst />{' '}
               </Stack>
            </CardContent>
         </Card>
      </Box>
   );
}

function UserLIst() {
   return (
      <List>
         {[0, 1, 2, 3, 4, 5, 6].map(value => {
            return (
               <ListItem key={value} disablePadding>
                  <ListItemButton>
                     <ListItemAvatar>
                        <Avatar
                           alt={`Avatar n°${value + 1}`}
                           src={`/static/images/avatar/${value + 1}.jpg`}
                           sx={{ width: 30, height: 30 }}
                        />
                     </ListItemAvatar>
                     <ListItemText
                        primary={`User No ${value + 1}`}
                        secondary={
                           value === 2 && (
                              <Chip
                                 color='primary'
                                 label='Manager'
                                 variant='outlined'
                                 size='small'
                              />
                           )
                        }
                     />
                  </ListItemButton>
               </ListItem>
            );
         })}
      </List>
   );
}

export default Hostel;
