import Label from "@/components/generic/label";
import VSpacer from "@/components/generic/vSpacer";
import { Avatar, Box } from "@mui/material";
import { useState } from "react";
import style from './style.module.css'

export default function UserProfile() {
    const [data, setData] = useState({
        fullName: 'Alex Johnson', email: 'alex.johnson@gmail.com',
        image: 'https://cdn.glitch.global/1e66498d-6dbe-4d71-a669-9459d36ef0e2/v2_0514010.jpg?1689685220329'
    })

    return <Box sx={{
        bgcolor: '#3D5654', display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', maxWidth: '100%', pb: 2, pt: 4
    }}>
        {/* Avatar */}
        <Box className={`${style["wrap"]}`}>
            <Avatar src={data.image} sx={{ height: 50, width: 50 }} />
        </Box>

        <VSpacer size="xs" />

        {/* Full Name */}
        <Label value={data.fullName} size="sm" casing="uppercase" color='white' fontWeight="bold" />


        {/* Email */}
        <Label value={data.email} size="xs" casing="lowercase" fontWeight="bold" color="#EBEDED" />
    </Box>
}