import React, { useEffect, useRef, useState } from "react";
import { Typography,TextField ,Button} from "@mui/material";

export default function FormChange(){
    const[username,updateUserName]=useState('');
    const[password,updatePassword]=useState('');
    let userName;
    let Password;
    // const user=useRef<>();
    // const pass=useRef<HTMLInputElement>();

    useEffect(()=>{
        console.log("Hii");
    },[])
    const handleUser=(e:any)=>{
        updateUserName(e.target.value);
    }
    const handlePassword=(e:any)=>{
        updatePassword(e.target.value);
    }
    const handleClick=()=>{
        console.log(username,password);
        userName=username;
        Password=password;

    }

    return(<>
    <Typography variant="h6"  >userName</Typography>
    <input type="string" onChange={handleUser} id="user" />
    <Typography variant="h6" >Password</Typography>
    <input type="password" onChange={handlePassword} id="pass"/>
    <Button variant="contained" onClick={handleClick}>Submit</Button>
    <Typography>{userName}</Typography>
    <Typography>{Password}</Typography>
    </>
    )
}