import styled from '@emotion/styled';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Card, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function OnBoard() {
   const navigate = useNavigate();
   return (
      <Box>
         <CardContainer direction='row' spacing={2}>
            <Card
               onClick={() => navigate('/onboard/create')}
               sx={{ p: 5, cursor: 'pointer' }}
            >
               <AddIcon />
            </Card>
            <Card
               onClick={() => navigate('/onboard/join')}
               sx={{ p: 5, cursor: 'pointer' }}
            >
               <SearchIcon />
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
