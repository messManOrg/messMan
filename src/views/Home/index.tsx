import { People } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import CardLinkWithCaption from 'components/CardLinkWithCaption';
import AppFeedback from './components/AppFeedback';
import LatestNotice from './components/LatestNotice';
import PhotoGallery from './components/PhotoGallery';
import RatingCard from './components/RatingCard';

export default function Home() {
   return (
      <Stack spacing={1.5}>
         <PhotoGallery />
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
