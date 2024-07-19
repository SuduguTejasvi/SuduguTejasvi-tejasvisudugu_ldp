import React from "react";
// import { Text } from "../../atoms/Typography";
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
    <h3>Title</h3>
    // <Grid container spacing={2}>
    //   <Grid item xs={4} container alignItems="center">
    //     <Text variant={props.v1} text={props.text1} />
    //   </Grid>
    //   <Grid item xs={8} container alignItems="center">
    //     <Icons source={props.path} />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Text variant={props.v2} text={props.text2} />
    //   </Grid>
    //   <Grid item xs={12}>
    //     <Text variant={props.v3} text={props.text3} />
    //   </Grid>
    // </Grid>
  );
}
