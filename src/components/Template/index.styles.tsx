import { Grid, styled } from '@mui/material';

export const CustomGrid = styled(Grid)({
  width: '100%',
  height: '100vh',
  margin: '0', // Remove any margin to ensure it fits the screen perfectly
  padding:'5px',
  gap:0
});
