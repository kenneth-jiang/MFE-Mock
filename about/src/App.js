import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import "./i18n";
import AboutPage from "./pages/AboutPage";

const App = ({ history }) => {
    return (
        <Router
            location={history.location}
            navigator={history}
        >
            <Routes>
                <Route 
                    path="/about" 
                    element={<AboutPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;