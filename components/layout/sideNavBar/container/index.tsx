import { Box } from "@mui/material";
import UserProfile from "../userProfile";
import Navigation from "../navigation";
import ActiveUsers from "../activeUsers";

export default function SideNavBar() {
    return <Box sx={{
        display: 'flex', flexDirection: 'column', width: '230px', /* bgcolor: '#425C5A', */ overflow: 'hidden',
        maxHeight: 'max-content', borderRadius: '16px', position: 'sticky', top: 0
    }}>
        {/* User Profile */}
        <UserProfile />


        {/* Navigation */}
        <Navigation />


        {/* Active users */}
        <ActiveUsers />

    </Box>
}