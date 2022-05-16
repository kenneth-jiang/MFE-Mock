import React, { useState } from "react";
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ onSend }) => {
    const [ value, setValue ] = useState("");

    const handleSubmit = () => {
        if (value && value !== "") {
            onSend({ id: localStorage.getItem("id"), message: value });
            setValue("");
        };
    };

    return (
        <>
            <Box>
                <TextField
                    style={{ width: "100%" }}
                    size="small"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSubmit();
                        };
                    }}
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
            </Box>
        </>
    );
};

export default ChatInput;