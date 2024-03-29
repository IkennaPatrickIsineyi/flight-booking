import { Box } from "@mui/material";
import FlightData from "./flightData";
import FlightPathVisual from "./flightPathVisual";
import LayoverType from "./layoverType";
import PriceSlider from "./priceSlider";
import { useState } from "react";
import VSpacer from "@/components/generic/vSpacer";
import Label from "@/components/generic/label";
import TicketClass from "./ticketClass";
import HSpacer from "@/components/generic/hSpacer";

type Props = {
    source: string,
    layoverType: string,
    destination: string,
}

export default function PriceFilter({ source, layoverType, destination }: Props) {
    const [price, setPrice] = useState({ minPrice: 2500, maxPrice: 6000 });
    const [layover, setLayover] = useState(layoverType);

    const handleLayoverTypeChange = (value: string) => {
        setLayover(value)
    }

    const handlePriceChange = (value: number, type: 'minPrice' | 'maxPrice') => {
        setPrice((state) => {
            return { ...state, [type]: value }
        })
    }

    const handleTicketClassChange = (value: string) => {

    }

    return <Box sx={{
        width: '100%', display: 'flex', flexDirection: 'column',
    }}>
        {/* Filter label and ticket class */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Label value="filter" size='sm' casing="uppercase" fontWeight="bold" color="#425C5A"
                sx={{ bgcolor: 'white', borderRadius: '30px', px: 4, py: 1 }} />

            <HSpacer size="sm" />

            <TicketClass handleChange={handleTicketClassChange} />
        </Box>

        <VSpacer size="sm" />

        <Box sx={{
            maxWidth: '100%', display: 'flex', flexDirection: 'column', borderRadius: '30px',
            overflow: 'hidden'
        }}>
            {/* Flight data and Flight path visualisation section */}
            <Box sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', px: 2, py: 4, bgcolor: '#425C5A' }}>
                {/* Flight data */}
                <FlightData source={source} destination={destination} layoverType={layoverType} />

                <VSpacer size="md" />
                {/* Flight path visualisation */}
                <FlightPathVisual />
            </Box>


            {/* Layover type and Price Slider section */}
            <Box sx={{ maxWidth: '100%', display: 'flex', flexDirection: 'column', px: 2, py: 3, bgcolor: '#3D5654' }}>
                {/* Layover type */}
                <LayoverType handleLayoverTypeChange={handleLayoverTypeChange} layoverType={layoverType} />
                <VSpacer size="md" />
                {/* Price Slider */}
                <PriceSlider minPrice={price.minPrice} maxPrice={price.maxPrice} handlePriceChange={handlePriceChange} />
                <VSpacer size="md" />
            </Box>
        </Box>

    </Box>
}