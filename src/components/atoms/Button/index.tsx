import React from 'react'
import { Button } from '@mui/material'
import { customButtonProps } from '../../../utils/interface'
const CustomButton=({label,handleButtonClick,variants}:customButtonProps)=>{
  return (
    <Button onClick={handleButtonClick} variant={variants}>{label}</Button>
  )
}
export default CustomButton