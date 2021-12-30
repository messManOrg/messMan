import {
   Box,
   Card,
   CardActionArea,
   CardContent,
   CardProps,
   Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

interface Props extends CardProps {
   caption?: string;
   path: string;
}

const CardLinkWithCaption: React.FC<Props> = ({
   caption,
   path,
   children,
   ...cardProps
}) => {
   return (
      <Card {...cardProps}>
         <CardActionArea component={Link} to={path}>
            <CardContent>
               {caption && (
                  <Box paddingBottom={1.8}>
                     <Typography variant='caption'>{caption}</Typography>
                  </Box>
               )}

               {children}
            </CardContent>
         </CardActionArea>
      </Card>
   );
};

export default CardLinkWithCaption;
