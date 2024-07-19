import { Grid, styled, TextField } from "@mui/material";

export const CustomGrid=styled(Grid)(({theme})=>({
    justifyContent:"center",
    alignItems:"center",
    display:"flex",
    flexDirection:"column",
    height:'100vh',
    gap:theme.spacing(1.25)

}));
export const CustomInput = styled(TextField)(({theme})=>({
    '& .MuiOutlinedInput-root': {
        height: theme.spacing(4)
    }
}));