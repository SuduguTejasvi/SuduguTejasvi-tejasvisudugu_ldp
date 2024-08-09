import React from "react";
import { Button } from "@mui/material";

import { NavButtonProps } from "../../../utils/interfaces/index";

export default function NavButton({ label, variants, handleClick }: NavButtonProps) {
  return (
    <Button variant={variants} onClick={handleClick}>
      {label}
    </Button>
  );
}
