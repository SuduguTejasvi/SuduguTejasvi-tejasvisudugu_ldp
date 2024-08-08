import React from "react";
import { Grid } from "@mui/material";

import { gridsize } from "./styles";

interface CardTemplateProps {
  children: React.ReactNode; 
}

export default function CardTemplate({ children }: CardTemplateProps) {
  return (
    <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center" style={gridsize}>
      {children}
    </Grid>
  );
}
