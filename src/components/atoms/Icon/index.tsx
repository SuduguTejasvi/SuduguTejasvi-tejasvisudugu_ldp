import React from "react";

interface IconProps{
    source:string,
}
export default function Icons (props:IconProps)
{
    return (
        <img src={props.source}/>
    )
}