import { Box } from "@mui/material";

export default function FlightPathVisual() {
    return <Box sx={{ width: '100%', height: 'auto' }}>
        <img src="/images/flightPath.png" style={{ height: '100%', width: '100%', objectFit: 'contain' }} />
    </Box>
}