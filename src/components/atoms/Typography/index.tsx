<<<<<<< HEAD
import React from "react";
import { Typography } from "@mui/material";
import {TextProps} from '../../../utils/interfaces/index';

export default function Text({variants,text}:TextProps){
   return(
    <Typography variant={variants}>{text}</Typography>
   );
=======
import React from 'react'
import { Typography } from '@mui/material'
interface TextProps{
    text:string,
    variant:'h4'|'h6'|'h3'|'subtitle1',
}
export function Text(props:TextProps)
{
    return(
        <Typography variant={props.variant}>{props.text}</Typography>
        
    )
>>>>>>> 0d091b39844ce777c69b8f5a8a99c359d5b5068d
}