import { Typography, Grid } from "@mui/material";
import React, { forwardRef } from "react";
import { InputProps } from "../../../utils/interfaces";
import { CustomTextField } from './index.styles'; // Assuming CustomTextField is defined in index.styles for styling

const InputField = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { text, types } = props;

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Typography variant="subtitle1">{text}</Typography>
        <CustomTextField
          type={types}
          inputRef={ref}
        />
      </Grid>
    </Grid>
  );
});

export default InputField;
