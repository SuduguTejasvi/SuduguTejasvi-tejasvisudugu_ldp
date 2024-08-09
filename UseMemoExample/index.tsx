import { Typography ,Box, TextField} from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { CustomInputField} from "./index.styles";

interface ProductsProp{
    id:number;
    name:string;
    price:number;
}
export default function SearchProducts()
{
    const[time,setTime]=useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        setTimeout(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000)
    })

    const [data,setData]=useState([{
        id: 1,
        name: 'Laptop',
        price: 9999.99
      },
      {
        id: 2,
        name: 'Smartphone',
        price: 6990.99
      },
      {
        id: 3,
        name: 'Headphones',
        price: 1998.99
      }]);

      const [searchData,updateSearchData]=useState('');
      let filteredData=useMemo(()=>{
        console.log("hello");
        return data.filter((products)=>products.name.toLowerCase().includes(searchData.toLowerCase()))
      },[searchData,data])
    return(
       <Box>
         <Typography variant="subtitle1">{time}</Typography>
         <Typography>Search Items</Typography>
         <CustomInputField variant="outlined" onChange={(e)=>{updateSearchData(e.target.value)}}/>

          <table style={{border:'2px'}}>
            <thead>
              <tr><th>S.No</th><th>Name</th><th>age</th></tr>
            </thead>
            <tbody>
             {
              filteredData.map((products)=>(
                <tr>
                  <th>{products.id}</th>
                  <th>{products.name}</th>
                  <th>{products.price}</th>
                </tr>

              ))
             }
            </tbody>
          </table>
       </Box>

    )
}