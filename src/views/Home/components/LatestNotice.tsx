import { ArrowForward, NotificationsRounded } from '@mui/icons-material';
import { Button, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CardLinkWithCaption from 'components/CardLinkWithCaption';
import { RoutePaths } from 'enums/routes';

const LatestNotice: React.FC = () => {
   return (
      <Stack gap={1.5}>
         <CardLinkWithCaption
            caption='Latest Notice'
            avatar={<NotificationsRounded />}
            to={RoutePaths.Notices}
            sx={{
               bgcolor: ({ palette }) =>
                  palette.mode === 'dark'
                     ? palette.success.dark
                     : palette.success.main,
            }}
         >
            <Typography variant='h5'>
               The quick brown fox jumps over the lazy dog!
            </Typography>
         </CardLinkWithCaption>

         <Button
            component={Link}
            to={RoutePaths.Notices}
            sx={{ alignSelf: 'end' }}
            endIcon={<ArrowForward />}
         >
            See all notices
         </Button>
      </Stack>
   );
};

export default LatestNotice;
