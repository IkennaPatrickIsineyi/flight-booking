import HSpacer from "@/components/generic/hSpacer";
import Label from "@/components/generic/label";
import { Box } from "@mui/material";

type Props = {
    source: string,
    layoverType: string,
    destination: string
}

export default function FlightData({ source, destination, layoverType }: Props) {
    return <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', width: '100%' }}>
        {/* takeoff airport */}
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Label value="From" size="sm" fontWeight="light" color="white" casing="uppercase" />
            <Label value={source} size="lg" fontWeight="bold" color="white" casing="uppercase" />
        </Box>

        <HSpacer size="xs" />

        {/* Layover type */}
        <Label value={layoverType} size="sm" fontWeight="light" color="white" casing="uppercase" />

        <HSpacer size="xs" />

        {/* destination airport */}
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <Label value="To" size="sm" fontWeight="light" color="white" casing="uppercase" />
            <Label value={destination} size="lg" fontWeight="bold" color="white" casing="uppercase" />
        </Box>
    </Box>
}