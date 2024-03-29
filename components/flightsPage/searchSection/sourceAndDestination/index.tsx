import { Box } from "@mui/material";
import React, { useEffect } from "react";
import Airport from "./airport";
import { SwapHoriz, SwapHorizontalCircle } from "@mui/icons-material";

type Props = {
    handleAirportChange: ({ value, type }: { value: string, type: 'source' | 'destination' }) => void
    source: string,
    destination: string
}

export default function SourceAndDestination({ source, destination, handleAirportChange }: Props) {
    return <Box sx={{
        display: 'flex', alignItems: 'center', maxWidth: 'max-content', px: 2, py: 1.5,
        bgcolor: '#E1ECEB', borderRadius: '30px'
    }}>
        {/* Source */}
        <Airport type="source" airport={source} handleAirportChange={handleAirportChange} />

        {/* Interchange button */}
        <SwapHorizontalCircle sx={{ mx: 2, fontSize: 27, color: 'black' }} />

        {/* Destination */}
        <Airport type="destination" airport={destination} handleAirportChange={handleAirportChange} />
    </Box>
}