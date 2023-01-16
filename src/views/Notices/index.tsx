import * as React from 'react';
import List from '@mui/material/List';

import Divider from '@mui/material/Divider';
import NoticeCard from './components/NoticeCard';

function Notices() {
   return (
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
         <NoticeCard />
         <Divider variant='inset' component='li' />
      </List>
   );
}

export default Notices;
