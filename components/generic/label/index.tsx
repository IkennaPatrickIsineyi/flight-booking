import { SxProps, Typography } from "@mui/material";

const fontSizes = {
    xxs: { xs: 7, },
    xs: { xs: 8, md: 9, },
    sm: { xs: 10, md: 12 },
    md: { xs: 12, md: 14 },
    lg: { xs: 14, md: 16 },
    xl: { xs: 16, md: 18 }
}

const fontWeights = {
    light: 400,
    regular: 500,
    bold: 600,
    thick: 700
}

type Props = {
    value: string,
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl',
    fontWeight: 'light' | 'regular' | 'bold' | 'thick',
    casing?: 'uppercase' | 'lowercase' | 'capitalize'
    color?: string,
    sx?: SxProps
}

export default function Label({ size, sx, value, fontWeight, casing = 'capitalize', color = 'inherit', }: Props) {
    return <Typography sx={{
        fontSize: fontSizes[size], fontWeight: fontWeights[fontWeight], color, fontFamily: 'inter',
        textTransform: casing, ...(sx || {})
    }}>
        {value}
    </Typography>
}