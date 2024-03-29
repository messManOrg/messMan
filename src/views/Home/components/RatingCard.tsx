import { useState } from 'react';
import { Reviews, Star } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

const labels: { [index: string]: string } = {
   1: 'Worst',
   2: 'Bad',
   3: 'Ok',
   4: 'Good',
   5: 'Excellent',
};

const RatingCard: React.FC = () => {
   const [value, setValue] = useState<number | null>(3);
   const [hover, setHover] = useState(-1);

   function handleChange(event: unknown, newValue: number | null) {
      setValue(newValue);
   }

   function handleChangeActive(event: unknown, newHover: number) {
      setHover(newHover);
   }

   return (
      <Card>
         <CardHeader title='How was todays Meal?' avatar={<Reviews />} />

         <CardContent>
            <Stack spacing={2} alignItems='center'>
               {value !== null && (
                  <Box sx={{ ml: 2 }}>
                     {labels[hover !== -1 ? hover : value]}
                  </Box>
               )}

               <Rating
                  size='large'
                  value={value}
                  onChange={handleChange}
                  onChangeActive={handleChangeActive}
                  emptyIcon={<Star sx={{ opacity: 0.55 }} fontSize='inherit' />}
               />
            </Stack>
         </CardContent>
      </Card>
   );
};

export default RatingCard;
