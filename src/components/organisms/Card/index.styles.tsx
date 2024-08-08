import { styled, Grid } from '@mui/material';

export const CustomGridRight = styled(Grid)({
  '& .MuiGrid-item': {
    marginBottom: '2px', 
    paddingBottom: '0px', 
  },
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  margin:'20px'
});
