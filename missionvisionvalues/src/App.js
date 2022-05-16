import React from "react";
import { Router, Routes, Route } from "react-router-dom";

import MissionVisionValuesPage from "./pages/MissionVisionValuesPage";
import "./i18n";

const App = ({ history }) => {
    return (
        <Router
            location={history.location}
            navigator={history}
        >
            <Routes>
                <Route 
                    path="/mission-vision-values" 
                    element={<MissionVisionValuesPage />}
                />
            </Routes>
        </Router>
    );
};

export default App;