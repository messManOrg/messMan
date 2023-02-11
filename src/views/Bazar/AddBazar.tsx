import {
   Box,
   Typography,
   TextField,
   Button,
   Stack,
   Checkbox,
} from '@mui/material';
import React, { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Image from 'next/image';

import Wrapper from 'components/Wrapper';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

function AddBazar() {
   const [value, setValue] = useState<Date | null>(new Date());
   const handelSubmit = (event: React.FormEvent) => {
      event.preventDefault();
   };
   return (
      <Wrapper>
         <form onSubmit={handelSubmit}>
            <Typography variant='h5' gutterBottom align='left'>
               Add Bazar List
            </Typography>

            <Stack spacing={3}>
               <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                     views={['day']}
                     label='Bazar Date'
                     value={value}
                     minDate={new Date()}
                     maxDate={
                        new Date(new Date().setMonth(new Date().getMonth() + 1))
                     }
                     onChange={newValue => {
                        setValue(newValue);
                     }}
                     inputFormat='dd-MM-yyyy'
                     renderInput={params => (
                        <TextField {...params} helperText={null} />
                     )}
                  />
               </LocalizationProvider>
               <Autocomplete
                  multiple
                  id='checkboxes-tags-demo'
                  options={top100Films}
                  disableCloseOnSelect
                  getOptionLabel={option => option.title}
                  renderOption={(props, option, { selected }) => (
                     <li {...props}>
                        <Checkbox
                           icon={icon}
                           checkedIcon={checkedIcon}
                           style={{ marginRight: 8 }}
                           checked={selected}
                        />
                        <Box
                           component='li'
                           sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                           {...props}
                        >
                           <Image
                              width={30}
                              height={30}
                              src='/profile.jpg'
                              alt='Profile image'
                              style={{ borderRadius: '50%' }}
                           />
                           {option.title}
                        </Box>
                     </li>
                  )}
                  renderInput={params => (
                     <TextField
                        {...params}
                        label='Member'
                        placeholder='Select Member'
                     />
                  )}
               />
            </Stack>

            <Button
               variant='contained'
               type='submit'
               sx={{ marginTop: 2 }}
               fullWidth
            >
               Add
            </Button>
         </form>
      </Wrapper>
   );
}

const top100Films = [
   { title: 'The Shawshank Redemption', year: 1994 },
   { title: 'The Godfather', year: 1972 },
   { title: 'The Godfather: Part II', year: 1974 },
   { title: 'The Dark Knight', year: 2008 },
   { title: '12 Angry Men', year: 1957 },
   { title: "Schindler's List", year: 1993 },
   { title: 'Pulp Fiction', year: 1994 },
];
export default AddBazar;
