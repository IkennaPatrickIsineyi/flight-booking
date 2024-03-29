import { Box } from "@mui/material";
import React from "react";
import Label from "../../generic/label";
import VSpacer from "../../generic/vSpacer";
import ResultCard from "./resultCard";

type Props = {
    results: {
        id: string,
        image: string,
        source: string,
        departureTime: string,
        destination: string,
        arrivalTime: string,
        airline: string,
        flightDuration: string,
        layoverType: string,
        price: number,
    }[]
}

export default function SearchResults({ results }: Props) {
    return <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        {/* Total */}
        <Label value={`result (${results.length})`} size="lg" color='#3D5654' casing="uppercase" fontWeight="regular" />

        <VSpacer size='sm' />

        {/* Flights */}
        <Box sx={{
            display: 'flex', flexDirection: 'column', borderRadius: '30px', width: '100%',
            overflow: 'hidden'
        }}>
            {results.map((flight, index) => {
                return (<ResultCard key={index} data={flight} isFirst={index === 0} isLast={results.length === index + 1} />)
            })}
        </Box>
    </Box>
}