import { Typography } from '@mui/material';
import CardLinkWithCaption from '../CardLinkWithCaption';

const LatestNoticeCard: React.FC = () => {
   return (
      <CardLinkWithCaption
         caption='Latest Notice'
         path='notices'
         sx={{
            backgroundColor: ({ palette }) =>
               palette.mode === 'dark'
                  ? palette.success.dark
                  : palette.success.main,
         }}
      >
         <Typography variant='h6'>
            The quick brown fox jumps over the lazy dog!
         </Typography>
      </CardLinkWithCaption>
   );
};

export default LatestNoticeCard;
