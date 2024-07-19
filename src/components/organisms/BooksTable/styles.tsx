import { styled } from "@mui/material";
import {Box} from "@mui/material";
export const StyledTableContainer = styled(Box)(({theme})=>({
    width: '80%',
    margin: '0 auto',
    maxHeight: theme.spacing(50),
    overflowY: 'auto', 
    border: '1px solid #ccc',
    borderRadius: theme.spacing(1),
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  }));
  