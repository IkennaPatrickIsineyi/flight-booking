import { Box, Button } from "@mui/material";
import Label from "../label";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { useEffect, useState } from "react";

type Props = {
    value?: string,
    placeholder: string,
    options: { value: string, label: string }[],
    handleSelect: (value: string) => void
}

export default function DropDown({ value, options, handleSelect, placeholder }: Props) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e: Event) => {
            if (open && !document.getElementById('dropdown-323')?.contains(e?.target as Node)) {
                setOpen(false)
            }
        }

        open && document.addEventListener('click', handler)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [open])

    const handleOpen = () => {
        setOpen(!open)
    }

    const handleItemSelection = (value: string) => {
        handleSelect(value);
        setOpen(false)
    }

    return <Box id='dropdown-323' sx={{
        display: 'flex', flexDirection: 'column', width: 'max-content',
        position: 'relative'
    }}>
        {/* Value */}
        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '100%',
            bgcolor: 'white', px: 2, py: 1, cursor: 'pointer', borderRadius: '30px'
        }} onClick={handleOpen}>
            <Label value={options.find(i => i.value === value)?.label || placeholder}
                size='sm' casing="uppercase" fontWeight="bold" color="#425C5A"
                sx={{ bgcolor: 'white', borderRadius: '30px', px: 1, }}
            />

            {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </Box>

        {/* Options */}
        {open && <Box sx={{
            position: 'absolute', display: 'flex', flexDirection: 'column', bgcolor: 'white',
            top: 50, left: 0, right: 0, height: 'max-content', zIndex: 2113, borderRadius: '0 0 30px 30px', overflow: 'hidden'
        }}>
            {options.map((item, index) => {
                return <Button key={index} sx={{
                    borderBottom: '2px solid #E1ECEB', width: '100%', mb: 1,
                    bgcolor: item.value === value ? '#E1ECEB' : 'white'
                }}
                    onClick={() => { handleItemSelection(item.value) }}>
                    <Label value={item.label} size="sm" fontWeight="regular" casing="capitalize" />
                </Button>
            })}
        </Box>}
    </Box>
}