import React from 'react';
import { iconProps } from '../../../utils/interface';

const Icon=({source}:iconProps)=>{
  return (
    <img src={source}/>
  )
}
export default Icon;
