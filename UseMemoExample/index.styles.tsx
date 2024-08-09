import { styled, TextField } from "@mui/material";

export const CustomInputField = styled(TextField)({
  "& .MuiInputBase-root": {
    height: '30px', // Adjust the height as per your design requirements
    width: '200px',
    margin: '10px',
    padding: '0px'
  },
});
