import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const CustomGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px',
    width: '500px',
    gap:'10px',
    backgroundColor: '#04052e',
    color: 'white',
    margin: 'auto', 
    borderRadius:'20px'
   
}));


export default CustomGrid;
