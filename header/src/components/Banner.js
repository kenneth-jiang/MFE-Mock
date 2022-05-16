import React, { useEffect, useState, useContext } from "react";
import { useNavigate, UNSAFE_NavigationContext } from 'react-router-dom';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import InputBase from "@mui/material/InputBase";
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles';
import * as constants from "../utils/constants";

// should be in a separate styles file
const StyledDiv  = styled("div")(() => ({
    height: "89px",
    borderBottom: "1px solid #febe10",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledContainer = styled(Container)(() => ({
    height: "89px",
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
    alignItems: "center",
    justifyContent: "center",
    // marginTop: "auto",
}));

const RightAlignedStyledDiv = styled("div")(() => ({
    marginLeft: "auto",
    textAlign: "right",
}));

const StyledButton = styled(Button)(() => ({
    color: "black",
}))

// component can stay here
const Banner = () => {
    const [ selectedTab, setSelectedTab ] = useState(0);
    const [ showInput, setShowInput ] = useState(false);
    const [ textValue, setTextValue ] = useState("");
    const [ hovered, setHovered ] = useState(false);
    const navigate = useNavigate();
    const { navigator } = useContext(UNSAFE_NavigationContext);

    useEffect(() => {
        function updatePath() {
            const path = navigator.location.pathname;
            if (path === "/") {
                return setSelectedTab(false);
            } else if (path === "/search") {
                return setSelectedTab(0);
            } else if (path === "/about") {
                return setSelectedTab(1);
            } else if (path === "/mission-vision-values") {
                return setSelectedTab(2);
            };
        };
        updatePath();
        navigator.listen(updatePath);
    }, []);

    const handleTabChange = (event, newValue) => {
        console.log(navigator.location.pathname)
        const path = navigator.location.pathname;
        if (path === "/") {
            return setSelectedTab(false);
        } else if (path === "/search") {
            return setSelectedTab(0);
        } else if (path === "/about") {
            return setSelectedTab(1);
        } else if (path === "/mission-vision-values") {
            return setSelectedTab(2);
        };
        // return setSelectedTab(newValue);
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
            {/* <StyledContainer maxWidth="xl"> */}
                <StyledGrid container>
                    <StyledGridItem item xs={2}>
                        <CandidImage
                            src={constants.candidImage}
                            onClick={() => {
                                navigate({ pathname: "/" })
                                handleTabChange();
                            }} 
                        />
                    </StyledGridItem>
                    <StyledGridItem item xs={6} style={{ justifyContent: "flex-start",}}>
                        <Box sx={{ borderColor: "divider" }}>
                            <Tabs
                                value={selectedTab}
                                // onChange={handleTabChange}
                                TabIndicatorProps={{ style: { color: "blue", background: "#febe10" } }}
                                textColor="inherit"
                            >
                                <Tab
                                    label="Search"
                                    onClick={() => {
                                        navigate({ pathname: "/search" })
                                        handleTabChange();
                                    }}
                                />
                                <Tab
                                    label="About us"
                                    onClick={() => {
                                        navigate({ pathname: "/about" })
                                        handleTabChange();    
                                    }} 
                                />
                                <Tab
                                    label="Mission and Values"
                                    onClick={() => {
                                        navigate({ pathname: "/mission-vision-values" })
                                        handleTabChange();
                                    }}
                                />
                                {/* <Tab
                                    label="Localization"
                                    onClick={() => {
                                        navigate({ pathname: "/localization" })
                                        handleTabChange();    
                                    }} 
                                /> */}
                            </Tabs>
                        </Box>
                    </StyledGridItem>
                    <StyledGridItem item xs={4} style={{ justifyContent: "flex-end", paddingRight: "5px" }}>
                        {/* <RightAlignedStyledDiv> */}
                        {hovered ?
                            <Paper
                                onMouseLeave={() => setHovered(false)} 
                                style={{ display: "flex",float: "right", border: "0.5px solid #febe10" }}
                                elevation={1}
                                component="form"
                                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: "80%" }}
                            >
                                <InputBase
                                    style={{ display: "flex", textAlign: "right" }}
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search Candid"
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton style={{ color: "black" }} sx={{ p: '10px' }} aria-label="directions">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            :
                            <IconButton style={{ color: "black" }} sx={{ p: '10px' }} aria-label="directions" onMouseEnter={() => setHovered(true)}>
                                <SearchIcon />
                            </IconButton>                    
                        }
                    </StyledGridItem>
                </StyledGrid>
            {/* </StyledContainer> */}
        </StyledDiv>
    ); 
};

export default Banner;