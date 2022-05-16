import React, { useState, useEffect, useCallback } from 'react';
import { Observable } from 'windowed-observable';
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const App = () => {
    const [ started, setStarted ] = useState(true);
    const [ messages, setMessages ] = useState([]);
    const [ count, setCount ] = useState(0);

    const observable = new Observable("custom");

    const handleMessage = useCallback((event) => {
        setMessages((prevMessage) => prevMessage.concat(event.detail));
        document.getElementById("logged-messages").scrollTop = document.getElementById("logged-messages").scrollHeight;
        // return setMessages((prevMessage) => prevMessage.length > 2 ? prevMessage.slice(-2).concat(event.detail) : prevMessage.concat(event.detail));
    }, []);
    
    const handleCount = useCallback((count) => {
        return setCount(count.count)
    }, []);

    useEffect(() => {
        window.addEventListener("customevent", handleMessage, true);

        return () => {
            window.removeEventListener("customevent", handleMessage, true);
        };
    }, [ handleMessage ]);

    useEffect(() => {
        observable.subscribe(handleCount);
        return () => {
            observable.unsubscribe(handleCount);
        }
    }, [ handleCount ]);

    return (
        <Card style={{ maxHeight: "300px", fontFamily: "Algebra Web,Georgia,serif" }}>
            <CardContent>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                    {
                    started
                    ?                    
                    <Button
                        variant="outlined"
                        size="small"
                        // style={{ backgroundColor: "#febe10", color: "black" }}
                        disabled={!started}
                        onClick={() => {
                            window.removeEventListener("customevent", handleMessage, true)
                            setStarted(false);
                        }}
                    >
                        Stop
                    </Button>
                    :
                    <Button
                        variant="outlined"
                        size="small"
                        // style={{ backgroundColor: "#febe10", color: "black" }}
                        disabled={started}
                        onClick={() => {
                            window.addEventListener("customevent", handleMessage, true)
                            setStarted(true);
                        }}
                    >
                        Start
                    </Button>
                    }
                    <span style={{ textAlign: "center", }}>
                        Printing Messages
                    </span>
                </div>
            </CardContent>
            <CardMedia>
                <div id="logged-messages" style={{ height: "150px", overflowY: "auto", lineHeight: 1.2, wordWrap: "break-word", padding: "10px" }}>
                    {messages && messages.map((message, index) => {
                        return (
                            <div style={{ paddingBottom: "15px" }} key={index + message}>
                                {message.message}
                            </div>
                        );
                    })}
                </div>
            </CardMedia>
            <br />
            <CardContent>
                <div>
                    There are {count} users online.
                </div>
            </CardContent>
        </Card>
    );
}

export default App;