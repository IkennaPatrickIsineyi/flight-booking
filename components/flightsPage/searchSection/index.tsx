import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import VSpacer from "../../generic/vSpacer";
import SourceAndDestination from "./sourceAndDestination";
import TripDate from "./tripDate";
import Travellers from "./numberOfTravelers";
import moment from 'moment'
import TripDimension from "./tripDimension";
import TicketClass from "./ticketClass";
import Label from "../../generic/label";

type DataType = {
    source: string, destination: string, date: string, travellers: number,
    tripDimension: 'one-way' | 'round-trip' | 'multi-city',
    ticketClass: 'first-class' | 'economy-class' | 'business-class',
}

type Props = {
    handleSearch: (payload: DataType) => boolean
}

export default function SearchSection({ handleSearch }: Props) {
    const [data, setData] = useState<DataType>({
        source: 'jfk', destination: 'bom', date: moment().toString(),
        travellers: 0, tripDimension: 'one-way',
        ticketClass: 'first-class',
    });

    const updateData = (value: {}) => {
        setData((state) => {
            return { ...state, ...value }
        })
    }

    const handleAirportChange = ({ value, type }: { value: string, type: string }) => {
        updateData({ [type]: value })
    }

    const handleDateChange = (value: string) => {
        updateData({ date: value })
    }

    const handleNumberOfTravellers = (value: number) => {
        updateData({ travellers: value })
    }

    const handleTripDimensionChange = (value: string) => {
        updateData({ tripDimension: value })
    }

    const handleTicketClassChange = (value: string) => {
        updateData({ ticketClass: value })
    }

    return <Box sx={{
        display: 'flex', flexDirection: 'column', bgcolor: 'white',
        borderRadius: '30px', px: 4, py: 2
    }}>
        {/* Row 1 */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>

            {/* source and destination airports */}
            <SourceAndDestination source={data.source} destination={data.destination}
                handleAirportChange={handleAirportChange}
            />


            {/* Date */}
            <TripDate date={data.date} handleDateChange={handleDateChange} />

            {/* Number of travellers */}
            <Travellers count={data.travellers} handleCountChange={handleNumberOfTravellers} />

        </Box>

        <VSpacer size="sm" />

        {/* Row 2 */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}>

            {/* trip dimension */}
            <TripDimension trip={data.tripDimension} handleTripChange={handleTripDimensionChange} />

            {/* Ticket class */}
            <TicketClass ticketClass={data.ticketClass} handleClassChange={handleTicketClassChange} />


            {/* Search button */}
            <Button variant='contained' sx={{ px: 5, py: 1.5, borderRadius: '30px' }}>
                <Label value="search" casing="uppercase" size="sm" fontWeight="bold" />
            </Button>

        </Box>
    </Box>
}