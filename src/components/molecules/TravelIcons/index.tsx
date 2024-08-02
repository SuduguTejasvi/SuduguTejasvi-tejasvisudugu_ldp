import React from "react";
import { Grid } from "@mui/material";
import Icons from "../../atoms/Icon/index";
// import {makeStyles} from "@mui/material";

interface TravelProps{
    src1:string,
    src2:string,
    src3:string,
    src4:string,
}
export default function TravelIcons (props:TravelProps){
    return(
        <>
        <Grid container spacing={5}>
            <Grid item xs={1}>
                <Icons source={props.src1}  />
            </Grid>
            <Grid item xs={1}>
            <Icons source={props.src2} />

            </Grid>
            <Grid item xs={1}>
                <Icons source={props.src3} />
            </Grid>
            <Grid item xs={1}>
                <Icons source={props.src4}/>
            </Grid>

        </Grid>
        </>
    )
}