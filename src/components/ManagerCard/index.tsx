import { Avatar, Stack, Typography } from '@mui/material';
import CardLinkWithCaption from '../CardLinkWithCaption';

const ManagerCard: React.FC = () => {
   const fullName = 'Someone';
   const uid = '#';
   const avatar = '';

   return (
      <CardLinkWithCaption caption='Current Manager' path={uid}>
         <Stack direction='row' spacing={2}>
            <Avatar src={avatar}>{fullName.charAt(0)}</Avatar>
            <Typography variant='h5'>{fullName}</Typography>
         </Stack>
      </CardLinkWithCaption>
   );
};

export default ManagerCard;
