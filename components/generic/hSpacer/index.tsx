import { Box } from "@mui/material";

const spacings = {
    xs: { xs: .5, md: .75, },
    sm: { xs: 1, md: 1.5 },
    md: { xs: 1.5, md: 2 },
    lg: { xs: 2, md: 3 },
    xl: { xs: 3, md: 4 }
}

type Props = {
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl',
}

export default function HSpacer({ size }: Props) {
    return <Box sx={{ mx: spacings[size] }}>
    </Box>
}