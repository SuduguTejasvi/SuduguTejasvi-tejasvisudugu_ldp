import React, { useContext } from "react";
import { Typography } from "@mui/material";
import { DataContext } from "./Home";

export default function StudentAttendance() {
  const data = useContext(DataContext);

  return (
    <>
      <Typography variant="h6">Welcome {data.name}</Typography>
      <Typography>Your attendance is {data.attendance}</Typography>
    </>
  );
}
