import { useState ,useEffect} from "react";
export const useGetApiData=()=>{
    const [products,updateProducts]=useState({category:'',image:'',price:''});
    useEffect(()=>{getProducts()},[]);
   
    async function  getProducts()
    {
     let d=await fetch('https://fakestoreapi.com/products/1');
     let data=await d.json();
     updateProducts(data);
     console.log(data);
    }
return products;

}