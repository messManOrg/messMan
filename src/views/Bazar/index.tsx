import * as React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useAuth } from 'store/auth/Provider';
import { formatDate } from 'utils';
import UserList from './components/UserList';

function createData(user: string[], date: Date) {
   return { user, date };
}

const rows = [
   createData(['Frozen yoghurt', 'shakil Ahmed'], new Date()),
   createData(['Yoghurt Frozen'], new Date()),
   createData(['Rokon', 'Polok', 'Hasibul'], new Date()),
];

const Bazar: React.FC = () => {
   const auth = useAuth();
   const manger = auth.role === 'manger';
   return (
      <>
         {manger && (
            <Link to='/app/add-bazar-list' style={{ textDecoration: 'none' }}>
               <Button variant='contained' sx={{ marginBottom: 2 }} fullWidth>
                  Add Bazar List
               </Button>
            </Link>
         )}
         <TableContainer component={Paper}>
            <Table aria-label='simple table'>
               <TableHead>
                  <TableRow>
                     <TableCell align='left'>Users</TableCell>
                     <TableCell align='left'>Date</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  {rows.map((row, index) => (
                     <TableRow
                        key={index}
                        sx={{
                           '&:last-child td, &:last-child th': { border: 0 },
                        }}
                     >
                        <TableCell component='th' scope='row' align='left'>
                           <UserList user={row.user} />
                        </TableCell>
                        <TableCell align='left' width={150}>
                           {formatDate(row.date)}
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </TableContainer>
      </>
   );
};

export default Bazar;
