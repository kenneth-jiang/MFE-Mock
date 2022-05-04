import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";

import Banner from "./components/Banner";

const StyledContainer = styled(Container)(() => ({
    borderLeft: "1px solid #febe10",
    height: "95vh",
}));

const App = ({ history }) => {
    return (
        <Router
            location={history.location}
            navigationType={history.action}
            navigator={history}
        >
            <Routes>
                <Route path="/about" element={
                    <StyledContainer>
                        <div style={{ height: "100px" }} />
                        <Banner />
                    </StyledContainer>
                } />
            </Routes>
        </Router>
    );
};

export default App;