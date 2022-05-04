import React from "react";
import { Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import CustomRouter from "./CustomRouter";

const App = ({ history }) => {
    return (
        <>
            {/* <CustomRouter history={history}> */}
            <Router navigator={history} location={history.location}>
                <React.Fragment>
                    <NavBar />
                    <br />
                    <Banner />
                    {/* <br />
                    <h1>21312</h1>
                    <Routes>
                        <Route path="/990-finder/*" element={<h1>990-Finder</h1>} />
                        <Route path="/about/*" element={<h1>About</h1>} />
                        <Route path="/*" element={<h1>/</h1>} />
                    </Routes> */}
                </React.Fragment>
                </Router>
            {/* // </CustomRouter> */}
        </>
    );
};

export default App;