import React from "react";
import { Grid } from "@mui/material";
import Title from "../../molecules/Title";
import TravelIcons from "../../molecules/TravelIcons/index";
import { Text } from "../../atoms/Typography";
import Icons from "../../atoms/Icon";
import {gridItemStyle} from './styles'

export default function MyntraCard() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={2} container justifyContent="flex-end" style={gridItemStyle}>
        <img src="/asserts/images/myntra.svg" style={{ height: '45px', width: '45px' }} alt="Myntra Logo" />
      </Grid>
      <Grid item xs={10}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Title v1="h3" v2="h4" v3="h6" path="/asserts/images/more.svg" text1="User Experience Designer" text2="Myntra" text3="Hitech city Hyderabad -500072" />
          </Grid>
          <Grid container item xs={12}>
            <Grid item xs={4}>
              <TravelIcons src1="/asserts/images/bike.svg" src2="/asserts/images/bus.svg" src3="/asserts/images/car.svg" src4="/asserts/images/train.svg" />
            </Grid>
            <Grid item xs={8}>
              <Text variant="subtitle1" text="36 min ago" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
