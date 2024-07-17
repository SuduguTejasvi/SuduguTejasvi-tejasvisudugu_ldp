import React from "react";
import {IconProps} from '../../../utils/interfaces';
export default function Icon({source}:IconProps)
{
    return(
        <img src={source} />
    );
}