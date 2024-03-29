import { Box } from "@mui/material";
import PageContainer from "../generic/pageContainer";
import Label from "../generic/label";

export default function DashboardPage() {
    return (<PageContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
            {Array.from({ length: 200 }).map((i, index) => (
                <Label key={index}
                    value={`Dashboard is under development - ${index}`}
                    size="sm" fontWeight="regular"
                />
            ))}
        </Box>
    </PageContainer>)
}