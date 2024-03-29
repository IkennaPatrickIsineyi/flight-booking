import Label from "@/components/generic/label";
import VSpacer from "@/components/generic/vSpacer";
import { Avatar, AvatarGroup, Box } from "@mui/material";
import { useEffect, useState } from "react";
import style from './style.module.css'

export default function ActiveUsers() {

    const [data, setData] = useState<{ total: number, users: string[] }>({ total: 0, users: [] });

    useEffect(() => {
        setData({
            total: 74,
            users: ['https://cdn.glitch.global/1e66498d-6dbe-4d71-a669-9459d36ef0e2/v2_0751672.jpg?1689685213320',
                'https://cdn.glitch.global/1e66498d-6dbe-4d71-a669-9459d36ef0e2/v2_0603373.jpg?1689685212552',
                'https://cdn.glitch.global/1e66498d-6dbe-4d71-a669-9459d36ef0e2/v3_0136070.jpg?1689685214836',
                'https://cdn.glitch.global/1e66498d-6dbe-4d71-a669-9459d36ef0e2/v3_0147396.jpg?1689685215547',
            ]
        })
    }, [])

    return <Box sx={{
        display: 'flex', flexDirection: 'column', bgcolor: '#425C5A', alignItems: 'flex-start', pt: 2,
        height: '100%', pl: 3, pr: 1, pb: 2
    }}>
        <Label value="active users" casing="uppercase" size="xs" fontWeight="regular" color="primary.main" />

        <VSpacer size="xs" />

        <AvatarGroup max={5} total={data.total} sx={{
            '& .MuiAvatar-root': {
                width: 26, height: 26, border: `2px solid ${'#425C5A'}`,
            },
        }}
            renderSurplus={(surplus) => {
                return <Avatar sx={{
                    bgcolor: 'primary.main', color: '#F5EDE0',
                }}>
                    <Label value={`+${surplus.toString()}`} size="xs" fontWeight="bold" color="#F5EDE0" />
                </Avatar>
            }}>

            {data.users.map((user, index) => {
                return (<Avatar key={index} src={user}
                    sx={{
                        bgcolor: 'red', width: 24, height: 24,
                        '&[class*="MuiAvatar-root"]': {
                            border: `2px solid ${'#425C5A'}`
                        },
                    }} />)
            })}

        </AvatarGroup>

        <VSpacer size="xs" />

        <Box sx={{ width: '100%', height: 'auto' }}>
            <img src={'/images/flightMap.png'} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
        </Box>

    </Box>
}