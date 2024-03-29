import { CalendarMonth, Person } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import Label from "../../../generic/label";

type Props = {
    count: number,
    handleCountChange: (value: number) => void
}

export default function Travellers({ count, handleCountChange }: Props) {
    return <Box sx={{
        display: 'flex', alignItems: 'center', px: 2, py: 1.5,
        bgcolor: '#E1ECEB', borderRadius: '30px'
    }}>
        <Person sx={{ mr: 1 }} />
        <Label value={`${count || 0} traveller`} size="sm" fontWeight="bold"
            color='#607573' casing="uppercase" />
    </Box>
}