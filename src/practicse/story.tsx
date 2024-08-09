import { configureStore, createSlice } from "@reduxjs/toolkit";
import { stat } from "fs";

interface initialStateProps{
    name:string;
    phoneno:string;
    amount:number
}

const initialState:initialStateProps={
    name:'',
    phoneno:'',
    amount:0

}

const userSlice=createSlice({
    name: 'user',
    initialState,
    reducers:{
        updateMobile:(state,action)=>{
            state.phoneno=action.payload;
        },
        updateName:(state,action)=>{
            state.name=action.payload;
        },
        debit:(state,action)=>{
            state.amount+=action.payload;
        },
        credit:(state,action)=>{
            state.amount-=action.payload;
        }
    }

});
const store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
})
export const {updateName,updateMobile,debit,credit}=userSlice.actions;
export default store;