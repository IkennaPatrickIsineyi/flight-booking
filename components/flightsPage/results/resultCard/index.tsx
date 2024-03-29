import HSpacer from "@/components/generic/hSpacer"
import Label from "@/components/generic/label"
import VSpacer from "@/components/generic/vSpacer"
import { Box, Button } from "@mui/material"
import style from './style.module.css'

type Props = {
    data: {
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
    },
    isFirst: boolean,
    isLast: boolean
}

export default function ResultCard({ data, isFirst, isLast }: Props) {
    const formatCurrency = ({ value, symbol }: { value: number, symbol: any }): string => {
        return `${value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).replace(/(\.|,)00$/g, "")}`
    }

    return <Box sx={{
        display: 'flex', alignItems: 'center', bgcolor: 'white', justifyContent: 'space-between', px: 3, py: 3,
        // borderRadius: `${isFirst ? '30px' : '0'} ${isFirst ? '30px' : '0'} ${isLast ? '30px' : '0'} ${isLast ? '30px' : '0'}`,
        flexWrap: 'wrap', borderBottom: isLast ? 'none' : '2px dashed #E1ECEB', maxWidth: '100%'
    }} className={isLast ? '' : `${style['curved-div']}`}>
        {/* Airline logo */}
        <Box sx={{ width: '50px', height: 'auto' }}>
            <img src={data.image} style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
        </Box>

        <HSpacer size="xs" />

        {/* Source and departure time */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            {/* Source airport code */}
            <Label value={data.source} casing="uppercase" size="lg" color="#425C5A" fontWeight="regular" />

            <VSpacer size="xs" />

            {/* Departure time */}
            <Label value={data.departureTime} casing="uppercase" size="sm" color="#425C5A" fontWeight="light" />
        </Box>

        <HSpacer size="xs" />

        {/* Airline name, flight duration, and layover type */}
        <Box sx={{
            display: 'flex', flexDirection: 'column', alignItems: 'center',
        }}>
            {/* Airline name */}
            <Label value={data.airline} sx={{ lineHeight: '20px' }} casing="uppercase" size="xxs" color="#425C5A" fontWeight="bold" />

            {/* Flight duration */}
            <Label value={data.flightDuration} sx={{ lineHeight: '20px' }} casing="uppercase" size="sm" color="#C99C33" fontWeight="regular" />

            {/* Layover type */}
            <Label value={data.layoverType} sx={{ lineHeight: '20px' }} casing="uppercase" size="sm" color="#849291" fontWeight="regular" />
        </Box>

        <HSpacer size="xs" />

        {/* Destination and arrival time */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            {/* Destination airport code */}
            <Label value={data.destination} casing="uppercase" size="lg" color="#425C5A" fontWeight="regular" />

            <VSpacer size="xs" />

            {/* Arrival time */}
            <Label value={data.arrivalTime} casing="uppercase" size="sm" color="#425C5A" fontWeight="light" />
        </Box>

        <HSpacer size="xs" />

        {/* Price and book now button */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            {/* Price */}
            <Label value={formatCurrency({ value: Number(data.price), symbol: '$' })}
                casing="uppercase" size="sm" color="#425C5A" fontWeight="bold"
            />

            <VSpacer size="xs" />

            {/* Book now button */}
            <Button variant="contained" sx={{ px: 2, py: 1, borderRadius: '30px', bgcolor: '#C99C33' }}>
                <Label value='Book now' casing="uppercase" size="xs" color="#FCF9F5" fontWeight="regular" />
            </Button>
        </Box>
    </Box>
}