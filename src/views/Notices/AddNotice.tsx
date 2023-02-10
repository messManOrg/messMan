import React, { useState } from 'react';
import { Box, Typography, TextField, Button, MenuItem } from '@mui/material';
import Wrapper from 'components/Wrapper';

interface IAddNotice {
   title: string;
   description: string;
   priority: 'first' | 'second' | 'third';
}

function AddNotice() {
   const [data, setData] = useState<IAddNotice>({
      title: '',
      description: '',
      priority: 'first',
   });
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setData(prev => ({ ...prev, [name]: value }));
   };

   const handelSubmit = (event: React.FormEvent): void => {
      event.preventDefault();
   };
   return (
      <Wrapper>
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
                  <MenuItem value='first'>First</MenuItem>
                  <MenuItem value='second'>Second</MenuItem>
                  <MenuItem value='third'>Third</MenuItem>
               </TextField>
            </Box>

            <Button variant='contained' type='submit' fullWidth>
               Add
            </Button>
         </form>
      </Wrapper>
   );
}

export default AddNotice;
