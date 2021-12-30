import { Stack, Typography } from '@mui/material';
import CardLinkWithCaption from '../../components/CardLinkWithCaption';
import LatestNoticeCard from '../../components/LatestNoticeCard';
import Layout from '../../components/Layout';
import ManagerCard from '../../components/ManagerCard';
import RatingCard from '../../components/RatingCard';

const Home: React.FC = () => {
   return (
      <Layout>
         <Stack spacing={1}>
            <LatestNoticeCard />
            <ManagerCard />

            <Stack direction='row' spacing={1}>
               <CardLinkWithCaption sx={{ flex: 1 }} path='/members'>
                  <Typography variant='button'>Mess Borders</Typography>
               </CardLinkWithCaption>

               <CardLinkWithCaption sx={{ flex: 1 }} path='/members'>
                  <Typography variant='button'>Something Else</Typography>
               </CardLinkWithCaption>
            </Stack>

            <RatingCard />
         </Stack>
      </Layout>
   );
};

export default Home;
