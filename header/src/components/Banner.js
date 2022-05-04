import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { styled } from '@mui/material/styles';


// should be in a separate styles file
const StyledDiv  = styled("div")(() => ({
    height: "89px",
    borderBottom: "1px solid #febe10",
}));

const StyledContainer = styled(Container)(() => ({
    height: "89px",
    borderLeft: "1px solid #febe10",
}));

const CandidImage = styled("img")(() => ({
    height: "33px",
    paddingBottom: "10px",
    cursor: "pointer",
}));

const StyledGrid = styled(Grid)(() => ({
    height: "89px",
}));

const StyledGridItem = styled(Grid)(() => ({
    display: "flex",
    marginTop: "auto",
}));

const RightAlignedStyledDiv = styled("div")(() => ({
    marginLeft: "auto",
    textAlign: "right",
}));

const StyledButton = styled(Button)(() => ({
    color: "black",
}))

// should be in constants file
const candidImage = "https://cdn.candid.org/images/candid-logo/candid-logo.svg";


// component can stay here
const Banner = () => {
    const [ selectedTab, setSelectedTab ] = useState(0);
    const [ showInput, setShowInput ] = useState(false);
    const [ textValue, setTextValue ] = useState("");
    const navigate = useNavigate();
    
    const handleTabChange = (event, newValue) => {
        return setSelectedTab(newValue);
    };

    const handleShowInput = () => {
        return setShowInput(!showInput);
    };

    const handleTextValueChange = (event) => {
        return setTextValue(event.target.value);
    };

    const renderSearchButtonOrInput = () => {
        if (!showInput) {
            return (
                <StyledButton onClick={handleShowInput}>
                    <SearchIcon />
                </StyledButton>
            );
        };
        return (
            <>
                <TextField
                    hiddenLabel
                    variant="filled"
                    size="small"
                    value={textValue}
                    onChange={handleTextValueChange}
                />
                <StyledButton
                    style={{ backgroundColor: "#febe10" }}
                    onClick={handleShowInput}
                >
                    Search
                </StyledButton>
            </>
        );
    };

    return (
        <StyledDiv>
            <StyledContainer maxWidth="lg">
                <StyledGrid container>
                    <StyledGridItem item xs={2}>
                        <CandidImage src={candidImage} onClick={() => navigate({ pathname: "/" })} />
                    </StyledGridItem>
                    <StyledGridItem item xs={3}>
                        <Box sx={{ borderColor: "divider" }}>
                            <Tabs
                                value={selectedTab}
                                onChange={handleTabChange}
                                textColor="inherit"
                            >
                                <Tab label="Things you can do" onClick={() => navigate({ pathname: "/990-finder" })} />
                                <Tab label="About us" onClick={() => navigate({ pathname: "/about" })} />
                            </Tabs>
                        </Box>
                    </StyledGridItem>
                    <StyledGridItem item xs={6}>
                        <RightAlignedStyledDiv>
                            {renderSearchButtonOrInput()}
                        </RightAlignedStyledDiv>
                    </StyledGridItem>
                </StyledGrid>
            </StyledContainer>
        </StyledDiv>
    ); 
};

export default Banner;