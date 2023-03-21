import React from 'react';
import Image from 'next/image';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import {
   Box,
   Typography,
   TextField,
   Button,
   Stack,
   Checkbox,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import DialogWrapper from 'components/DialogWrapper';

const icon = <CheckBoxOutlineBlankIcon fontSize='small' />;
const checkedIcon = <CheckBoxIcon fontSize='small' />;

function SpecificUserCost() {
   const handelSubmit = (event: React.FormEvent) => {
      event.preventDefault();
   };

   return (
      <DialogWrapper>
         <form onSubmit={handelSubmit}>
            <Typography variant='h5' gutterBottom align='left'>
               Add Specific User Cost
            </Typography>

            <Stack spacing={3}>
               <TextField label='Title' name='title' type='text' />
               <Autocomplete
                  multiple
                  id='checkboxes-tags-demo'
                  options={allUser}
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
               <TextField label='Amount' name='amount' type='number' />
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
      </DialogWrapper>
   );
}

const allUser = [
   { title: 'The Shawshank Redemption', year: 1994 },
   { title: 'The Godfather', year: 1972 },
   { title: 'The Godfather: Part II', year: 1974 },
   { title: 'The Dark Knight', year: 2008 },
   { title: '12 Angry Men', year: 1957 },
   { title: "Schindler's List", year: 1993 },
   { title: 'Pulp Fiction', year: 1994 },
];
export default SpecificUserCost;
