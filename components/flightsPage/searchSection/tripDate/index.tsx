import { CalendarMonth } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import moment from 'moment'
import Label from "../../../generic/label";

type Props = {
    date: string,
    handleDateChange: (value: string) => void
}

export default function TripDate({ date, handleDateChange }: Props) {
    return <Box sx={{
        display: 'flex', alignItems: 'center',
        px: 2, py: 1.5, bgcolor: '#E1ECEB', borderRadius: '30px'
    }}>
        <CalendarMonth sx={{ mr: 1, color: '#607573' }} />
        <Label value={moment(date).format('D MMMM yyyy')} size="sm" fontWeight="bold"
            color='#607573' casing="uppercase" />
    </Box>
}