import React from "react";
import CustomRouter from "./CustomRouter";
import { Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";

import Banner from "./components/Banner";
import Input from "./components/Input";

const StyledContainer = styled(Container)(() => ({
    borderLeft: "1px solid #febe10",
    height: "80vh",
}));

const App = ({ history }) => {
    return (
        <>
            {/* <CustomRouter history={history}> */}
            <Router
                location={history.location}
                navigationType={history.action}
                navigator={history} 
            >
                <Routes>
                    <Route path="/990-finder" element={
                        <StyledContainer>
                            <div style={{ height: "100px" }} />
                            <Banner />
                            <br />
                            <Input />
                        </StyledContainer>
                    } />
                </Routes>
            </Router>
            {/* </CustomRouter> */}
        </>
    );
};

export default App;