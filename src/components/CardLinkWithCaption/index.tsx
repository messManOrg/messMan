import {
   Card,
   CardActionArea,
   CardContent,
   CardHeader,
   CardHeaderProps,
   CardProps,
   Stack,
} from '@mui/material';
import { Link, LinkProps } from 'react-router-dom';

interface Props extends CardProps {
   to: LinkProps['to'];
   caption?: string;
   avatar?: CardHeaderProps['avatar'];
   icon?: any;
}

const CardLinkWithCaption: React.FC<Props> = props => {
   const { caption, avatar, to, icon, children, ...cardProps } = props;

   return (
      <Card {...cardProps}>
         <CardActionArea component={Link} to={to}>
            {caption && <CardHeader title={caption} avatar={avatar} />}

            <CardContent>
               <Stack
                  direction='row'
                  gap={2}
                  justifyContent='center'
                  alignItems='center'
               >
                  {icon && icon}
                  {children}
               </Stack>
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default CardLinkWithCaption;
