import Link from 'next/link';
import { Button, Container, Stack } from '@mui/material';

export default function LandingPage() {
   return (
      <Container sx={{ textAlign: 'center' }}>
         <h1>Landing Page</h1>

         <Stack direction='row' gap={3} justifyContent='center'>
            <Button variant='contained' component={Link} href='/app'>
               Go to Web App
            </Button>

            <Button variant='outlined' disabled href='/#'>
               Get the Android App
            </Button>
         </Stack>
      </Container>
   );
}
