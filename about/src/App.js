import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import AboutPage from "./pages/AboutPage";
import "./i18n";

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