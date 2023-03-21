import React from 'react';
import { DateRange } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableFooter,
   TableHead,
   TableRow,
   Typography,
} from '@mui/material';
import DayPickerStyled from 'components/DayPickerStyled';
import UserButton from 'components/UserButton';
import { eachDayOfInterval, isSameDay } from 'date-fns';
import MealIndicator, { MealDay } from './components/MealIndicator';
import { RootStyle } from './styles';

function createData(name: string, meals: number[]) {
   return { name, meals };
}

const rows = [
   createData('Snow', [1, 1, 0, 1, 1, 1.5]),
   createData('Lannister', [0.5, 1, 1, 1.5, 1, 1]),
   createData('Jon', [1, 1, 1, 1, 0, 1]),
   createData('Cersei', [0.5, 1, 1, 0.5, 1, 1]),
   createData('Jaime', [1, 1, 1, 1, 0, 0]),
   createData('Arya', [1, 1, 0, 1, 1, 1.5]),
   createData('Daenerys', [0.5, 1, 1, 1.5, 1, 1]),
   createData('Ferrara', [1, 1, 1, 1, 0, 1]),
   createData('Rossini', [0.5, 1, 1, 0.5, 1, 1]),
   createData('Harvey', [1, 1, 1, 1, 0, 0]),
   createData('Stark', [1, 1, 1, 1, 0, 0]),
   createData('Targaryen', [1, 1, 1, 1, 0, 0]),
   createData('Melisandre', [1, 1, 1, 1, 0, 0]),
   createData('Clifford', [1, 1, 1, 1, 0, 0]),
   createData('Frances', [1, 1, 1, 1, 0, 0]),
   createData('Roxie', [1, 1, 1, 1, 0, 0]),
   createData('Doe', [1, 1, 1, 1, 0, 0]),
];

const today = new Date();

function Meals() {
   const [range, setRange] = React.useState<DateRange | undefined>({
      from: today,
   });

   const selectedDays = React.useMemo(() => {
      if (!range) return [];

      const from = range.from || today;
      const to = range.to || from;

      if (isSameDay(from, to)) {
         return [from]; // single day
      }

      return eachDayOfInterval({
         start: from,
         end: to,
      });
   }, [range]);

   // TODO: these parts should move outside later
   const Head = () => (
      <TableHead>
         <TableRow>
            <TableCell>Name</TableCell>

            <TableCell>
               <MealDay days={selectedDays} />
            </TableCell>
         </TableRow>
      </TableHead>
   );

   const Body = () => (
      <TableBody>
         {rows.map(item => (
            <TableRow key={item.name}>
               <TableCell>
                  <UserButton
                     id='#'
                     avatar={'/assets/images/user.jpg'}
                     name={item.name}
                  />
               </TableCell>

               <TableCell>
                  <MealIndicator
                     items={item.meals.slice(0, selectedDays.length)}
                  />
               </TableCell>
            </TableRow>
         ))}
      </TableBody>
   );

   const Footer = () => (
      <TableFooter>
         <TableRow>
            <TableCell align='right'>
               <Typography variant='h6'>Budget</Typography>
            </TableCell>

            <TableCell>
               <Typography variant='h6'>= 1000</Typography>
            </TableCell>
         </TableRow>
      </TableFooter>
   );

   return (
      <RootStyle>
         <Paper>
            <DayPickerStyled
               mode='range'
               max={7}
               selected={range}
               onSelect={setRange}
            />
         </Paper>

         <TableContainer>
            <Table stickyHeader>
               <Head />
               <Body />
               <Footer />
            </Table>
         </TableContainer>
      </RootStyle>
   );
}

export default Meals;
