import Label from "@/components/generic/label";
import { Box, Slider, Tooltip } from "@mui/material";
import { useState } from "react";

type Props = {
    minPrice: number,
    maxPrice: number,
    handlePriceChange: (value: number, type: 'minPrice' | 'maxPrice') => void
}

export default function PriceSlider({ minPrice, maxPrice, handlePriceChange }: Props) {
    const [price, setPrice] = useState([minPrice, maxPrice])

    const handleChange = (
        event: Event,
        newValue: number | number[],
        activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        setPrice(newValue)
    };

    return <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <Label value="price" casing="uppercase" size="xs" fontWeight="regular" color="#F5F6F6" />

        {/* Price Switch */}
        <Slider
            sx={{
                '& .MuiSlider-rail': {
                    height: '2px',
                    bgcolor: '#5A7674'
                },
                '& .MuiSlider-track': {
                    height: '1px',
                    background: '#3D5654'
                },
                '& .MuiSlider-thumb': {
                    height: 14,
                    width: 14,
                },
                '& .MuiSlider-valueLabel': {
                    background: '#C99C33',
                    color: '#F8F3EB',
                    fontSize: 10,
                    borderRadius: '20px'
                }
            }}
            track='inverted'
            value={price}
            min={0}
            max={10000}
            slots={{
                valueLabel: ({ children, value }) => (
                    <Tooltip open={true} enterTouchDelay={0}
                        PopperProps={{
                            disablePortal: true,
                            popperOptions: {
                                positionFixed: true,
                                /*  modifiers: {
                                     preventOverflow: {
                                         enabled: true,
                                         boundariesElement: "window"
                                     } 
                                 } */
                            }
                        }}
                        placement="bottom" title={value} disableTouchListener={true} arrow={true} >
                        {children}
                    </Tooltip>
                ),
            }}
            valueLabelFormat={(value) => `$${value}`}
            onChange={handleChange}
            valueLabelDisplay="on"
            disableSwap
        />
    </Box>
}