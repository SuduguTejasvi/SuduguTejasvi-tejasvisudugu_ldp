import React, { createContext } from "react";
import { Typography } from "@mui/material";
import ExamNotification from "./ExamNotification";

export const DataContext = createContext<{ name: string; attendance: number }>({
  name: "",
  attendance: 0,
});

const data = {
  name: "Tejasvi",
  attendance: 75,
};

export default function Home() {
  return (
    <>
      <DataContext.Provider value={data}>
        <Typography variant="h4">Welcome to JNTUH</Typography>
        <ExamNotification />
      </DataContext.Provider>
    </>
  );
}
