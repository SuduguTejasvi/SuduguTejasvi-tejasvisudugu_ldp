import React, { useReducer } from "react";
import { Button, Typography,Grid } from "@mui/material";
import { container } from "./styles";

interface Action {
    type: 'INR' | 'DEC';
}

export default function CounterExample() {
    function counterReducer(state: number, action: Action) {
        switch(action.type) {
            case 'INR': return state + 1;
            case 'DEC': return state - 1;
            default: return state; 
        }
    }

    const [counter, dispatch] = useReducer(counterReducer, 0);

    return (
        <Grid style={container}>
             <Button onClick={() => { dispatch({ type: 'INR' }) }} variant="contained">+</Button>
            <Typography>Counter: {counter}</Typography>
            <Button onClick={() => { dispatch({ type: 'DEC' }) }} variant="contained">-</Button>
        </Grid>
    );
}
