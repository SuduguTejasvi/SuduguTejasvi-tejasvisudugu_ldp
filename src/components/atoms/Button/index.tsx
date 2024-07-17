<<<<<<< HEAD
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
=======
import React from 'react';

interface Props {
	onClick: () => void;
	label: string | number;
}

function Button({ onClick, label }: Props) {
	return <button onClick={onClick}>{label}</button>;
}

export default Button;
>>>>>>> 0d091b39844ce777c69b8f5a8a99c359d5b5068d
