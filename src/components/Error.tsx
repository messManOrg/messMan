import { ErrorOutline } from '@mui/icons-material';
import { List, Stack, Typography } from '@mui/material';

interface Error {
   message: string;
}

interface Props {
   error:
      | string
      | Error
      | {
           errors: Error[];
           message?: string;
        };
}

export default function Error({ error }: Props) {
   if (typeof error === 'string') {
      return <Message>{error}</Message>;
   }

   // @ts-expect-error bs error
   if (error?.errors) {
      return (
         <List dense>
            {error.message && <Message>{error.message}</Message>}

            {/* @ts-expect-error bs error */}
            {error?.errors.map((item, i) => (
               <Stack direction='row' gap={1.5} alignItems='center' key={i}>
                  <ErrorOutline color='warning' fontSize='small' />
                  <Typography color='error'>{item.message}</Typography>
               </Stack>
            ))}
         </List>
      );
   }

   if (error.message) {
      return <Message>{error.message}</Message>;
   }

   return <Message>{JSON.stringify(error, null, 2)}</Message>;
}

function Message({ children }: { children: string }) {
   return (
      <Typography align='center' p={1} color='error' fontSize='large'>
         {children}
      </Typography>
   );
}
