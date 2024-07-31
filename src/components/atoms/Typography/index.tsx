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
}