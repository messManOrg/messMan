import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';
import { useState } from 'react';
import { Reviews, Star } from '@mui/icons-material';

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

   function handleChange(event, newValue) {
      setValue(newValue);
   }

   function handleChangeActive(event, newHover) {
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
                  emptyIcon={
                     <Star style={{ opacity: 0.55 }} fontSize='inherit' />
                  }
               />
            </Stack>
         </CardContent>
      </Card>
   );
};

export default RatingCard;
