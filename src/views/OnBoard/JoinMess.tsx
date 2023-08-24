import { Link, useLocation, useNavigate } from 'react-router-dom';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import SearchIcon from '@mui/icons-material/Search';
import {
   Box,
   Button,
   Card,
   CardContent,
   CardMedia,
   Stack,
   Typography,
} from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { useAuthActions } from 'store/auth/Provider';

function JoinMess() {
   return (
      <div>
         <Search>
            <SearchIconWrapper>
               <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
               placeholder='Search…'
               inputProps={{ 'aria-label': 'search' }}
            />
         </Search>
         <Stack spacing={2} marginTop={2}>
            <MessList />
            <MessList />
            <MessList />
            <MessList />
            <MessList />
         </Stack>
      </div>
   );
}

function MessList() {
   const navigate = useNavigate();
   const { dispatch } = useAuthActions();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/app';

   function handelJoinMess() {
      dispatch({ type: 'joinMess' });
      navigate(from, { replace: true });
   }

   return (
      <Card sx={{ display: 'flex' }}>
         <CardMedia
            component='img'
            sx={{ width: 100, height: 100 }}
            image='https://images.unsplash.com/photo-1661961110144-12ac85918e40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='Live from space album cover'
         />
         <Box
            sx={{
               display: 'flex',
               flexDirection: 'column',
               width: '100%',
            }}
         >
            <CardContent>
               <Typography component='div' variant='h6'>
                  <Link
                     to='/onboard/mass'
                     style={{ color: 'white', textDecoration: 'none' }}
                  >
                     Mess Name
                  </Link>
               </Typography>

               <Box display='flex' justifyContent='space-between'>
                  <Typography
                     variant='subtitle1'
                     color='text.secondary'
                     component='div'
                  >
                     location
                  </Typography>
                  <Button
                     variant='contained'
                     size='small'
                     sx={{ padding: 0 }}
                     onClick={handelJoinMess}
                  >
                     <AddBusinessIcon /> Join
                  </Button>
               </Box>
            </CardContent>
         </Box>
      </Card>
   );
}

const Search = styled('div')(({ theme }) => ({
   position: 'relative',
   borderRadius: theme.shape.borderRadius,
   backgroundColor: alpha(theme.palette.common.white, 0.15),
   '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
   },
   marginRight: theme.spacing(0),
   marginLeft: 0,
   width: '100%',
   [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(0),
      width: 'auto',
   },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: theme.spacing(0, 2),
   height: '100%',
   position: 'absolute',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: 'inherit',
   '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
         width: '20ch',
      },
   },
}));
export default JoinMess;
