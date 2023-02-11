import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import DialogWrapper from 'components/DialogWrapper';

interface IAddNotice {
   title: string;
   description: string;
   priority: 'high' | 'normal' | 'low';
}

function AddNotice() {
   const [data, setData] = useState<IAddNotice>({
      title: '',
      description: '',
      priority: 'high',
   });
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setData(prev => ({ ...prev, [name]: value }));
   };

   const handelSubmit = (event: React.FormEvent): void => {
      event.preventDefault();
   };
   return (
      <DialogWrapper>
         <form onSubmit={handelSubmit}>
            <Typography variant='h5' gutterBottom align='left'>
               Add Notice
            </Typography>
            <Box marginY={1.5}>
               <TextField
                  fullWidth
                  label='Title'
                  value={data.title}
                  onChange={handleChange}
                  name='title'
                  variant='outlined'
                  type='text'
               />
            </Box>
            <Box marginY={1.5}>
               <TextField
                  fullWidth
                  label='Description'
                  variant='outlined'
                  onChange={handleChange}
                  name='description'
                  value={data.description}
                  type='text'
                  minRows={4}
                  multiline
               />
            </Box>
            <Box marginY={1.5}>
               <TextField
                  value={data.priority}
                  onChange={handleChange}
                  label='Priority'
                  name='priority'
                  select
                  fullWidth
               >
                  <MenuItem value='high'>High</MenuItem>
                  <MenuItem value='normal'>Normal</MenuItem>
                  <MenuItem value='low'>Low</MenuItem>
               </TextField>
            </Box>

            <Button variant='contained' type='submit' fullWidth>
               Add
            </Button>
         </form>
      </DialogWrapper>
   );
}

export default AddNotice;
