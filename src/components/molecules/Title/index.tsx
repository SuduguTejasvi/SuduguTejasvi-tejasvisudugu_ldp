import React from "react";
// import { Text } from "../../atoms/Typography";
import { Grid } from "@mui/material";
import Icons from "../../atoms/Icon";

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
