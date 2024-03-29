import DropDown from "@/components/generic/dropdown";
import { Box } from "@mui/material";
import { useState } from "react";

type Props = {
    ticketClass?: string,
    handleChange: (value: string) => void
}

export default function TicketClass({ ticketClass, handleChange }: Props) {
    const [selectedItem, setSelectedItem] = useState(ticketClass);

    const options = [
        { value: 'first-class', label: 'First Class' },
        { value: 'business-class', label: 'Business Class' },
        { value: 'economy-class', label: 'Economy Class' },
    ]

    const handleClassChange = (value: string) => {
        setSelectedItem(value);
        handleChange(value)
    }

    return <Box sx={{ width: 'max-content' }}>
        <DropDown value={selectedItem} options={options} placeholder="Ticket of class" handleSelect={handleClassChange} />
    </Box>
}