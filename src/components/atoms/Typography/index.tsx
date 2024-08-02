import { Typography } from '@mui/material';
import React from 'react';
import { customTypographyProps } from '../../../utils/interface';

const CustomTypography=({variants,text}:customTypographyProps)=>{
  return (
    <Typography variant={variants}>{text}</Typography>
  )
}
export default CustomTypography;
