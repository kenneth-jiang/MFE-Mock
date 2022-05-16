import React, { useEffect, useState, useContext } from "react";
import { UNSAFE_NavigationContext, useNavigate } from "react-router-dom";
import Divider from "@mui/material/Divider";
import CircularProgress from "@mui/material/CircularProgress";
import Input from "./components/Input";
import ResultsContent from "./components/ResultsContent";
import { getNewsData } from "../api/candidApi";

const SearchPage = () => {
    const [newsArticles, setNewsArticles] = useState(null);

    const handleSubmit = async (value) => {
        if (value !== "") {
            let response = await getNewsData(value);
            setNewsArticles(response.data.data);
        };
    };

    return (
        <>
            <Input handleSubmit={handleSubmit} />
            <br/>
            <br/>
            <Divider />
            <br />
            <br />
            {newsArticles && <ResultsContent newsArticles={newsArticles} />}
        </>
    );
};

export default SearchPage;