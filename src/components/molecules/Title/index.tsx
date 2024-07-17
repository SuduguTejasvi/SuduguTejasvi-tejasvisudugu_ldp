<<<<<<< HEAD
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
=======
import React from "react";
import { Text } from "../../atoms/Typography";
import { Grid } from "@mui/material";
import Icons from "../../atoms/Icon";

interface TitleProps {
  v1: 'h4' | 'h6' | 'h3' | 'subtitle1';
  v2: 'h4' | 'h6' | 'h3' | 'subtitle1';
  v3: 'h4' | 'h6' | 'h3' | 'subtitle1';
  path: string;
  text1: string;
  text2: string;
  text3: string;
}

export default function Title(props: TitleProps) {
  return (
    <Grid container spacing={2}>
      <Grid item xs={4} container alignItems="center">
        <Text variant={props.v1} text={props.text1} />
      </Grid>
      <Grid item xs={8} container alignItems="center">
        <Icons source={props.path} />
      </Grid>
      <Grid item xs={12}>
        <Text variant={props.v2} text={props.text2} />
      </Grid>
      <Grid item xs={12}>
        <Text variant={props.v3} text={props.text3} />
      </Grid>
    </Grid>
  );
}
>>>>>>> 0d091b39844ce777c69b8f5a8a99c359d5b5068d
