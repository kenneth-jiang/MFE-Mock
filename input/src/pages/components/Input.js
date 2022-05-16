import React, { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";

const NineNintyInputPlaceholder = "Search for news";

const Input = ({ handleSubmit }) => {
    const [ textValue, setTextValue ] = useState("");

    const handleTextChange = (event) => {
        return setTextValue(event.target.value);
    };

    return (
        <>
            <span style={{ fontSize: "50px"}}>
                Search Candid
            </span>
            <br />
            <br />
            <Paper
                style={{ display: "flex", border: "0.5px solid #febe10" }}
                elevation={1}
                sx={{ display: 'flex', alignItems: 'center', width: "80%" }}
            >
                <InputBase
                    style={{ display: "flex" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder={NineNintyInputPlaceholder}
                    value={textValue}
                    onChange={handleTextChange}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit(textValue);
                            setTextValue("");
                        };
                    }}
                />
                <Button
                    onClick={() => {
                        handleSubmit(textValue);
                        setTextValue("");
                    }}
                    style={{ color: "black", backgroundColor: "#febe10" }} 
                    sx={{ p: '10px' }}
                >
                    <SearchIcon />
                </Button>
            </Paper>
        </>
    );
};

export default Input;