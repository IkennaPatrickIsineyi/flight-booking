import Label from "@/components/generic/label";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";

type Props = {
    trip: 'one-way' | 'round-trip' | 'multi-city',
    handleTripChange: (value: string) => void
}

const options = [
    { label: 'One Way', value: 'one-way' },
    { label: 'Round Trip', value: 'round-trip' },
    { label: 'Multi City', value: 'multi-city' },
]

export default function TripDimension({ trip, handleTripChange }: Props) {
    const [selectedItem, setselectedItem] = useState<string>(trip);

    const handleSelect = (value: string) => {
        setselectedItem(value);
        handleTripChange(value)
    }

    return <Box sx={{ display: 'flex', alignItems: 'center', px: .5, bgcolor: '#E1ECEB', borderRadius: '30px' }}>
        {options.map(({ value, label }, index) => {
            const isSelected = selectedItem === value;

            return (<Button key={index} onClick={() => { handleSelect(value) }}
                variant={isSelected ? 'contained' : 'text'} sx={{
                    bgcolor: isSelected ? '#425C5A' : 'inherit', borderRadius: '30px',
                    px: 4, py: 1.5, textTransform: 'uppercase',
                    ":hover": {
                        bgcolor: '#425C5A90', color: '#ECEEED'
                    }
                }}>
                <Label value={label} size='sm' fontWeight='bold' casing="uppercase" />
            </Button>)
        })}
    </Box>
}