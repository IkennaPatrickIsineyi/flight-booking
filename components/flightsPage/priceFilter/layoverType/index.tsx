import Label from "@/components/generic/label";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const options = [
    { value: 'non-stop', label: 'non stop' },
    { value: 'one-stop', label: 'one stop' },
    { value: 'more-stop', label: 'more stop' },
]

type Props = {
    layoverType: string,
    handleLayoverTypeChange: (value: string) => void
}

export default function LayoverType({ layoverType, handleLayoverTypeChange }: Props) {
    const [selectedItem, setselectedItem] = useState(layoverType);

    const handleSelect = (value: string) => {
        setselectedItem(value)
        handleLayoverTypeChange(value)
    }

    return <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {options.map(({ value, label }, index) => {
            const isSelected = selectedItem === value;

            return (<Button key={index} onClick={() => { handleSelect(value) }}
                variant={isSelected ? 'contained' : 'text'} sx={{
                    bgcolor: isSelected ? '#C99C33' : 'inherit', borderRadius: '30px',
                    px: 2, py: 1, textTransform: 'uppercase',
                    ":hover": {
                        bgcolor: '#C99C3390', color: '#ECEEED'
                    }
                }}>
                <Label value={label} size='xs' fontWeight='regular' color='white' casing="uppercase" />
            </Button>)
        })}
    </Box>
}