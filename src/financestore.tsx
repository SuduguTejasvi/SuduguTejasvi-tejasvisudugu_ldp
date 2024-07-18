import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState={
    money:0,
}
const financeSlice=createSlice({
    name: 'Finance Tracker',
    initialState,
    reducers:{
        addMoney:(state,action)=>{
            state.money+=action.payload;
        },
        deductMoney:(state,action)=>{
            state.money-=action.payload;
        }
    }
});
const financestore=configureStore({
    reducer:{
        finance:financeSlice.reducer
    }

})
export const{addMoney,deductMoney}=financeSlice.actions;
export default financestore;