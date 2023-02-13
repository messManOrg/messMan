import { MiscellaneousServices } from '@mui/icons-material';
import {
   Button,
   Card,
   CardContent,
   CardHeader,
   Stack,
   TextField,
} from '@mui/material';

export default function AppFeedback() {
   return (
      <Card>
         <CardHeader title='App Feedback' avatar={<MiscellaneousServices />} />

         <CardContent>
            <Stack spacing={1.5}>
               <TextField
                  fullWidth
                  multiline
                  minRows={1.5}
                  placeholder='Say anything about MessMan'
               />

               <Button fullWidth variant='outlined' type='submit'>
                  Submit
               </Button>
            </Stack>
         </CardContent>
      </Card>
   );
}
