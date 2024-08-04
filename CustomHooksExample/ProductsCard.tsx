import React, { useEffect, useRef, useState } from "react";
import { CustomBox } from "./loginfo.styles";
import { Typography } from "@mui/material";
import {useGetApiData} from './useGetApiData'
export default function ProductsCard() {
 
let data=useGetApiData();
 if(data.category===''){
  return <><CustomBox>
  <Typography variant="h4">Fetching Data</Typography>
  
    </CustomBox></>

}
return (<><CustomBox>
<Typography variant="h4">Products List</Typography>
<Typography variant="subtitle1">{data.category}</Typography>
<Typography variant="subtitle1">{data.price}</Typography>
<img src={data.image} alt={data.category} style={{height:'200px',width:'200px'}}/>
  </CustomBox></>)
}
// category
// : 
// "men's clothing"
// description
// : 
// "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
// id
// : 
// 1
// image
// : 
// "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
// price
// : 
// 109.95