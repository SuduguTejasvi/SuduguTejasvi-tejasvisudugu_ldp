import React from "react";
import { Typography } from "@mui/material";
import StudentAttendance from "./StudentAttendance";
import { darkTheme } from "../../Themes/index"; // Import your theme

export default function ExamNotification() {
    return (
        <>
            <Typography variant="h3" sx={darkTheme.typography.h3}>Jntuh Exam Schedule is released</Typography>
            <Typography variant="h4" sx={darkTheme.typography.h4}>Starts from 17th Aug</Typography>
            <Typography variant="h6" sx={darkTheme.typography.h6}>All the best</Typography>
            <Typography variant="subtitle1" sx={darkTheme.typography.subtitle1}>Prepare well....</Typography>
            <StudentAttendance />
        </>
    );
}
