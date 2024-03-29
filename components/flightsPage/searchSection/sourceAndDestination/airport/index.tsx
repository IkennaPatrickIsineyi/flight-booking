import { LocationOn } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";
import Label from '../../../../generic/label'

type Props = {
    airport: string,
    type: 'source' | 'destination',
    handleAirportChange: ({ value, type }: { value: string, type: 'source' | 'destination' }) => void
}

const airportMapping: { [key: string]: { [key: string]: string } } = {
    jfk: { city: 'Ney York' },
    bom: { city: 'Mumbai' }
}

export default function Airport({ airport, type, handleAirportChange }: Props) {
    return <Box sx={{ display: 'flex', px: 2, alignItems: 'center', maxWidth: 'max-content', }}>
        <LocationOn sx={{ mr: 1 }} />
        <Label value={`${airportMapping[airport]?.city} (${airport})`} size="sm"
            casing="uppercase" fontWeight="bold" color='#6C807F'
        />
    </Box>
}