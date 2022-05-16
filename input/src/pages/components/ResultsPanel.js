import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ResultsContent from "./ResultsContent";

const ResultsPanel = () => {
    const [ selectedTab, setSelectedTab ] = useState(0);

    const paperTab = (label, value) => {
        if (selectedTab === value) {
            return (
                <Paper elevation={0} square={true} style={{ borderLeft: "1px solid #febe10", borderRight: "1px solid #febe10", borderTop: "1px solid #febe10", borderBottom: "none !important" }}>
                    <Tab
                        // borderRadius={0}
                        label={label}
                        style={{ color: "black"}}
                        onClick={() => setSelectedTab(value)}
                    />
                </Paper>
            );
        };
        return (
            <Tab
                label={label}
                style={{ color: "grey" }}
                onClick={() => setSelectedTab(value)}
            />
        );
    };

    return (
        <Container>
            <ResultsContent />
        </Container>
        // <>
        //     <Tabs value={selectedTab} onChange={(e, newValue) => setSelectedTab(newValue)} TabIndicatorProps={{
        //         style: {
        //             display: "none",
        //         },
        //     }}>
        //         {paperTab("News", 0)}
        //         {/* {paperTab("Essentials", 0)} */}
        //         {/* {paperTab("Grants", 1)} */}
        //     </Tabs>
        //     <Paper square={true} style={{ boxShadow: "0px 0px 2px 0px #febe10", minheight: "400px", borderLeft: "1px solid #febe10", borderRight: "1px solid #febe10", borderBottom: "1px solid #febe10" }}>
        //     </Paper>
        // </>
    );
};

export default ResultsPanel;