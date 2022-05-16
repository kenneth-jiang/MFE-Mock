import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";
import { styled } from "@mui/material";

import SearchPage from "./pages/SearchPage";
// import Banner from "./pages/components/Banner";
// import Input from "./pages/components/Input";
// import CustomRouter from "./CustomRouter";

const StyledContainer = styled(Container)(() => ({
    borderLeft: "1px solid #febe10",
    fontFamily: "Algebra Web,Georgia,serif",
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
                    <Route path="/search" element={
                        <StyledContainer>
                            <div style={{ height: "50px" }} />
                            <SearchPage />
                        </StyledContainer>
                    } />
                </Routes>
            </Router>
            {/* </CustomRouter> */}
        </>
    );
};

export default App;