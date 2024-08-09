import { styled, TextField } from "@mui/material";
import {Box} from "@mui/material";
export const CustomBox=styled(Box)({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    height:'100vh'

})
export const CustomInputField=styled(TextField)({
    '& .MuiInputBase-root':{
        height:'30px',
        margin:'10px'
    }

})