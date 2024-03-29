import Label from "@/components/generic/label";
import { AccountBalanceOutlined, AccountBalanceWalletOutlined, Flight, House, NewspaperOutlined, PieChartOutline, SettingsOutlined } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const style = {
    fontSize: 22, color: '#C99C33', mr: 1
}

const routes = [
    { label: 'Dashboard', path: '/', icon: <House sx={style} /> },
    { label: 'Flights', path: '/flights', icon: <Flight sx={style} /> },
    { label: 'Wallet', path: '/wallet', icon: <AccountBalanceWalletOutlined sx={style} /> },
    { label: 'Reports', path: '/reports', icon: <NewspaperOutlined sx={style} /> },
    { label: 'Statistics', path: '/statistics', icon: <PieChartOutline sx={style} /> },
    { label: 'Settings', path: '/settings', icon: <SettingsOutlined sx={style} /> },
]

export default function Navigation() {
    const path = usePathname();
    const pathIndex = routes.findIndex((i) => i.path === path)

    const [currentPath, setCurrentPath] = useState({ path, index: pathIndex });

    useEffect(() => {
        setCurrentPath({ path, index: pathIndex })
    }, [path])

    return <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%', }}>
        <Box sx={{ py: 1, bgcolor: '#425C5A' }} />
        {routes.map(({ label, path, icon }, index) => {
            const isCurrentpath = index === currentPath.index
            return (<Box key={index} sx={{
                pl: 2, bgcolor: '#425C5A',
                ":hover": {
                    borderRadius: isCurrentpath ? '0 16px 16px 0' : 'none',
                    color: 'white',
                },
                borderRadius: `0 ${index === currentPath.index + 1 ? '16px' : '0'}  ${index === currentPath.index - 1 ? '16px' : '0'} 0`
            }}>
                <Button href={path} sx={{
                    display: 'flex', alignItems: 'center', px: 1.5, py: 1, justifyContent: 'flex-start',
                    bgcolor: isCurrentpath ? '#E1ECEB' : '#425C5A',
                    ":hover": {
                        bgcolor: isCurrentpath ? '#E1ECEB90' : '#D6A21750', color: 'white',
                        borderRadius: isCurrentpath ? '16px' : 'none'
                    },
                    borderRadius: `16px ${index === currentPath.index + 1 ? '16px' : '0'}  ${index === currentPath.index - 1 ? '16px' : '0'} 16px`
                }}>
                    {/* Icon */}
                    {icon}

                    {/* Label */}
                    <Label value={label} color={isCurrentpath ? '#425C5A' : '#ECEEED'} size='sm' fontWeight="regular"
                        casing="uppercase" //sx={{ ":hover": { color: 'white' } }}
                    />
                </Button>
            </Box>)
        })}
    </Box>
}