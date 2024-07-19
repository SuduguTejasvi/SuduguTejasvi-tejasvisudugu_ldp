import { Grid, Box, Typography } from "@mui/material";
import React, { useContext, useRef, useState } from "react";
import Text from "../../atoms/Typography";
import InputField from "../../molecules/Title/index";
import CustomizedButton from "../../atoms/Button";
import { adminB, adminW } from "../../../utils/constants/index";
import Icon from "../../atoms/Icons";
import { CustomGridRight } from "./index.styles";
import { isDark } from "../../../App";
import { darkTheme } from "../../../Themes/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const isDarkMode = useContext<boolean>(isDark);
  const [usernameError, setUsernameError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const userInputRef = useRef<HTMLInputElement>(null); 
  const passwordInputRef = useRef<HTMLInputElement>(null); 

  const handleFormSubmit = () => {
    if (userInputRef.current && passwordInputRef.current) {
      const username = userInputRef.current.value.trim();
      const password = passwordInputRef.current.value.trim();
      setUsernameError(false);
      setPasswordError(false);
      if (!username) {
        setUsernameError(true);
      }
      if (!password) {
        setPasswordError(true);
      }
      if (username && password) {
        console.log("Username:", username);
        console.log("Password:", password);
        userInputRef.current.value = "";
        passwordInputRef.current.value = "";
        toast.success('Successfully Logged In', {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored"
          });
      }
    }
  };

  return (
   <>
    <CustomGridRight>
      <Grid item xs={12} justifyContent="center">
        <Text variants="h4" text="Get Started Now" />
        <Text variants="h6" text="Enter your credentials to explore more.." />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center">
          <Icon source={!isDarkMode ? adminB : adminW} /> 
        </Box>
      </Grid>
      <Grid item xs={12}>
        <InputField text="Username" types="string" ref={userInputRef} /> 
        {usernameError && <Typography variant="subtitle1" sx={{ color: darkTheme.palette.error.main }}>Please enter Username</Typography>}
      </Grid>
      <Grid item xs={12}>
        <InputField text="Password" types="password" ref={passwordInputRef} /> 
        {passwordError && <Typography variant="subtitle1" sx={{ color: darkTheme.palette.error.main }}>Please enter Password</Typography>}
      </Grid>
      <Grid item>
        <CustomizedButton label="Log In" variants="contained" handleClick={handleFormSubmit}  />
      </Grid>
    </CustomGridRight>
    <ToastContainer
/>
   </>
  );
}
