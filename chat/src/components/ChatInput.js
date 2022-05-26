import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ onSend }) => {
    const [ value, setValue ] = useState("");

    const handleChange = (event) => {
        return setValue(event.target.value);
    };

    const handleEnterKeydown = (event) => {
        if (event.key === "Enter") {
            return handleSubmit();
        };
    };

    const handleSubmit = () => {
        if (value && value !== "") {
            onSend({
                id: localStorage.getItem("id"),
                message: value,
            });
            return setValue("");
        };
    };

    return (
        <TextField
            style={{ width: "100%" }}
            size="small"
            value={value}
            onChange={(event) => handleChange(event)}
            onKeyDown={(event) => handleEnterKeydown(event)}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton edge="end" onClick={handleSubmit}>
                            <SendIcon variant="outlined"/>
                        </IconButton>
                    </InputAdornment>
                )
            }}
        />
    );
};

export default ChatInput;