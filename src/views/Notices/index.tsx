import * as React from 'react';
import { Link } from 'react-router-dom';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import AddButton from './components/AddButton';
import NoticeCard from './components/NoticeCard';

function Notices() {
   return (
      <>
         <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <NoticeCard />
            <Divider variant='inset' component='li' />
         </List>
         <Link to={'/app/add-notice'}>
            <AddButton />
         </Link>
      </>
   );
}

export default Notices;
