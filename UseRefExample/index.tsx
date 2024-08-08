import { Typography, Button } from "@mui/material";
import React, { useRef } from "react";

export default function ChangeContext() {
    const ele = useRef<HTMLDivElement>(null); 

    const handleChangeText = () => {
        if (ele.current instanceof HTMLElement) { 
            ele.current.innerHTML = "Changed Text";
        }
    };

    return (
        <>
            <Typography ref={ele} variant="h6">This is heading</Typography>
            <Button variant="contained" onClick={handleChangeText}>
                Click me
            </Button>
        </>
    );
}
