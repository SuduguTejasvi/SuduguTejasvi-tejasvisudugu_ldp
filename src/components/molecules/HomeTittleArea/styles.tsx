import { styled } from '@mui/system';
import { Box } from '@mui/material';

export const CustomGrid = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '18.75rem',
    width: '31.25rem',
    gap:'0.625rem',
    backgroundColor: '#04052e',
    color: 'white',
    margin: 'auto', 
    borderRadius:'1.25rem'
   
}));


export default CustomGrid;
