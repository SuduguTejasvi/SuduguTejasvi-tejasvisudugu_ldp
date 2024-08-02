import React from "react";
import { Typography } from "@mui/material";
import {TextProps} from '../../../utils/interfaces/index';

export default function Text({variants,text}:TextProps){
   return(
    <Typography variant={variants}>{text}</Typography>
   );
}