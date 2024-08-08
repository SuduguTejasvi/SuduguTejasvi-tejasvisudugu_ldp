import { Grid, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {updateName,updateMobile,debit,credit} from './story';
const UserForm: React.FC = () => {

    const[userName,setUserName]=useState("");
    const[mobileNumber,setMobileNumber]=useState("");
    const[amount,setAmount]=useState(0);
    const dispatch=useDispatch();
    return (
        <>
            <Typography variant="h6">User Form</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">Name</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="outlined" type="text" fullWidth onChange={(e)=>{setUserName(e.target.value)}}/>
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" fullWidth onClick={()=>{dispatch(updateName(userName)) ;setUserName("")}}>Update</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">Phone no</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="outlined" type="text" fullWidth onChange={(e)=>{setMobileNumber(e.target.value)}} />
                    </Grid>
                    <Grid item xs={2}>
                        <Button variant="contained" fullWidth onClick={()=>{dispatch(updateMobile(mobileNumber));setMobileNumber("")}}>Update</Button>
                    </Grid>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={4}>
                        <Typography variant="subtitle1">Amount</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField variant="outlined" type="number" fullWidth onChange={(e)=>{setAmount(parseInt(e.target.value))}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <Button variant="contained" fullWidth onClick={()=>{dispatch(debit(amount));setAmount(0)}}>Debit</Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" fullWidth onClick={()=>{dispatch(credit(amount));setAmount(0)}}>Credit</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default UserForm;
