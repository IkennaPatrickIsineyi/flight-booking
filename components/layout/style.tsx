
import { SxProps } from "@mui/material";

type PropKeys = {
    container: SxProps,
    pageContent: SxProps,
    innerContainer: SxProps
};

export const layoutStyle: PropKeys = {
    container: {
        height: '100vh',
        maxWidth: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflowY: 'hidden',
        bgcolor: '#E3F2F1',
        /*  backgroundImage: 'url(/images/bg.png)',
         backgroundSize: '100% 100%',
         backgroundRepeat: 'no-repeat' */
    },
    innerContainer: {
        bgcolor: '#E1ECEB',
        display: 'flex',
        borderRadius: '16px',
        alignItems: 'stretch',
        height: 'max-content',
        width: '80vw',
        boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 16px 16px 0px',
        ":hover": { overflowY: 'auto' },
        overflowY: 'hidden',
    },
    pageContent: {
        height: '80vh',
        width: '100%',
        zIndex: 32,
        position: 'relative'
    }
}