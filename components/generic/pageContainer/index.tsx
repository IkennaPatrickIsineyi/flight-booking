import { Box } from "@mui/material";

type Props = {
    children: React.JSX.Element
}

export default function PageContainer({ children }: Props) {
    return <Box sx={{ /* px: 2, py: 2 */width: { xs: '90%', md: '90%', xl: '80%' }, mx: 'auto', py: 2 }}>
        {children}
    </Box>
}