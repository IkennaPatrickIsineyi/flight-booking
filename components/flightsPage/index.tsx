'use client'

import { Box } from "@mui/material";
import PageContainer from "../generic/pageContainer";
import SearchSection from './searchSection'
import SearchResults from './results'
import { sampleFlightData } from './results/sampleData'
import { useState } from "react";
import VSpacer from "../generic/vSpacer";
import HSpacer from "../generic/hSpacer";
import PriceFilter from "./priceFilter";

export default function FlightsPage() {
    const [searchResults, setSearchResults] = useState(sampleFlightData);

    const handleSearch = (payload: {}) => {
        return true
    }



    return (<PageContainer>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', }}>
            {/* Search section */}
            <SearchSection handleSearch={handleSearch} />

            <VSpacer size='sm' />

            {/* Results and price filter */}
            <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                {/* Results */}
                <Box sx={{ width: '60%', }}>
                    <SearchResults results={sampleFlightData} />
                </Box>

                <HSpacer size="xs" />

                {/* Price filter */}
                <Box sx={{ width: '35%', }}>
                    <PriceFilter source="jfk" destination="bom" layoverType="non-stop" />
                </Box>
            </Box>
        </Box>
    </PageContainer>)
}