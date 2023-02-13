import { Stack, Typography } from '@mui/material';
import CardLinkWithCaption from 'components/CardLinkWithCaption';
import LatestNotice from './components/LatestNotice';
import RatingCard from './components/RatingCard';
import AppFeedback from './components/AppFeedback';
import { People } from '@mui/icons-material';

export default function Home() {
   return (
      <Stack spacing={1.5}>
         <LatestNotice />

         <CardLinkWithCaption
            sx={{ flex: 1, textAlign: 'center' }}
            to='members'
            icon={<People />}
         >
            <Typography variant='button'>Mess Borders</Typography>
         </CardLinkWithCaption>

         <Stack direction='row' spacing={1}>
            <CardLinkWithCaption sx={{ flex: 1 }} to='specific-cost'>
               <Typography variant='button'>Specific Cost</Typography>
            </CardLinkWithCaption>

            <CardLinkWithCaption sx={{ flex: 1 }} to='all-cost'>
               <Typography variant='button'>All Cost</Typography>
            </CardLinkWithCaption>
         </Stack>

         <RatingCard />
         <AppFeedback />
      </Stack>
   );
}
