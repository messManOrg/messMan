import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Avatar, AvatarGroup, Button } from '@mui/material';

function createData(name: string, date: Date) {
   return { name, date };
}

const rows = [
   createData('Frozen yoghurt', new Date()),
   createData('Ice cream sandwich', new Date()),
   createData('Eclair', new Date()),
   createData('Cupcake', new Date()),
   createData('Gingerbread', new Date()),
   createData('Gingerbread', new Date()),
];

const Bazar: React.FC = () => {
   return (
      <TableContainer component={Paper}>
         <Table aria-label='simple table'>
            <TableHead>
               <TableRow>
                  <TableCell>Avatar</TableCell>
                  <TableCell align='right'>Names</TableCell>
                  <TableCell align='right'>Date</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {rows.map(row => (
                  <TableRow
                     key={row.name}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component='th' scope='row'>
                        <AvatarGroup max={2}>
                           <Avatar
                              alt='Shakil Ahmed'
                              src='/static/images/avatar/1.jpg'
                           />
                           <Avatar
                              alt='Shakil Ahmed'
                              src='/static/images/avatar/1.jpg'
                           />
                        </AvatarGroup>
                     </TableCell>
                     <TableCell component='th' scope='row'>
                        {row.name}
                     </TableCell>
                     <TableCell align='right'>
                        {JSON.stringify(row.date)}
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
};

export default Bazar;
