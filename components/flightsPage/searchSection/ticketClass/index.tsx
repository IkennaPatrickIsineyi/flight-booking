import { FlightClass, } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import Label from "../../../generic/label";

type Props = {
    ticketClass: string,
    handleClassChange: (value: string) => void
}

const options: { [key: string]: { [key: string]: string } } = {
    'first-class': { label: 'first class' },
    'business-class': { label: 'business class' },
    'economy-class': { label: 'economy class' },
}

export default function TicketClass({ ticketClass, handleClassChange }: Props) {
    return <Box sx={{ display: 'flex', alignItems: 'center', px: 2, py: 1.5, bgcolor: '#E1ECEB', borderRadius: '30px' }}>
        <FlightClass sx={{ mr: 1 }} />
        <Label value={options[ticketClass]?.label} size="sm" fontWeight="bold"
            color='#607573' casing="uppercase" />
    </Box>
}