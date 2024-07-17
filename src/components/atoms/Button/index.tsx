import React from "react";
import { Button } from "@mui/material";
import { ButtonProps } from "../../../utils/interfaces";

export default function CustomizedButton({ variants, label, handleClick }: ButtonProps) {
  return (
    <Button variant={variants} onClick={handleClick}>
      {label}
    </Button>
  );
}
