'use client'

import { Box, ThemeProvider } from "@mui/material"
import React, { useEffect, useState } from "react"
import { theme } from './theme'
import { layoutStyle } from "./style"
import SideNavBar from "./sideNavBar/container"

type LayoutType = {
    children: React.ReactNode
}

export default function Layout({ children }: LayoutType) {
    const [state, setState] = useState({
        menuOpen: false
    });

    useEffect(() => {
        updateState({
            isMobile: window.innerWidth < 900,
        })
    }, [])


    const updateState = (newValue: any) => {
        setState((previousValue) => { return { ...previousValue, ...newValue } });
    }


    return <ThemeProvider theme={theme()}>
        <Box sx={layoutStyle.container}>
            <Box sx={layoutStyle.innerContainer}>
                {/* Side navigation */}
                <SideNavBar />

                {/* Page Content */}
                <Box sx={layoutStyle.pageContent}>
                    {children}
                </Box>
            </Box>
        </Box>

    </ThemeProvider>
}