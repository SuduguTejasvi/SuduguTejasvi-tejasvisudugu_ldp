import { Grid } from "@mui/material";
import React from "react";
import Form from "../organisms/Card";
import { background } from "../../utils/constants";
import { CustomGrid } from "./index.styles";

export default function CardLayout() {
  return (
    <CustomGrid container>
      <Grid item xs={8} style={{ height: '100vh' }}>
        <img src={background} alt="Background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Grid>
      <Grid item xs={4} style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Form />
      </Grid>
    </CustomGrid>
  );
}
