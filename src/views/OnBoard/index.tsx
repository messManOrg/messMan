import { useNavigate } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, Stack, Typography } from '@mui/material';
import styled from '@emotion/styled';

function OnBoard() {
   const navigate = useNavigate();
   return (
      <Box>
         <CardContainer direction='row' spacing={2}>
            <Card
               onClick={() => navigate('/onboard/create')}
               sx={{
                  p: 5,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <AddIcon />
               <Typography>Create</Typography>
            </Card>
            <Card
               onClick={() => navigate('/onboard/join')}
               sx={{
                  p: 5,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
               }}
            >
               <SearchIcon />
               <Typography>Search</Typography>
            </Card>
         </CardContainer>
      </Box>
   );
}

const CardContainer = styled(Stack)(() => ({
   justifyContent: 'center',
   alignItems: 'center',
   height: '95vh',
}));

export default OnBoard;
