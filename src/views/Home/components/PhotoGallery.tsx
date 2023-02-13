import { Card, CardActionArea, CardMedia } from '@mui/material';

export default function PhotoGallery() {
   return (
      <Card>
         <CardActionArea>
            <CardMedia image='/profile.jpg' sx={{ height: 200 }} />
         </CardActionArea>
      </Card>
   );
}
