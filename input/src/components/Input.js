import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

// should be in separate styles file
const StyledTextField = styled(TextField)(() => ({
    width: "60%",
}));

const StyledButton = styled(Button)(() => ({
    backgroundColor: "#febe10",
    color: "black",
    fontSize: "25px",
}));

// should be in separate constants file
const NineNintyInputPlaceholder = "Enter organization name or EIN";

// component stays here
const Input = () => {
    const [ textValue, setTextValue ] = useState("");

    const handleTextChange = (event) => {
        return setTextValue(event.target.value);
    };

    return (
        <>
            <StyledTextField
                variant="filled"
                placeholder={NineNintyInputPlaceholder}
                value={textValue}
                onChange={handleTextChange}
            />
            <StyledButton>
                Search
            </StyledButton>
        </>
    );
};

export default Input;