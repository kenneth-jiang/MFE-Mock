import React, { useEffect, useRef } from 'react';
import socketClient from "socket.io-client";
import { Observable } from 'windowed-observable';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChatInput from "./components/ChatInput";

// const SERVER = "d13kgc8p2qbrvs.cloudfront.net"
const SERVER = "localhost:4001"

const App = () => {
    let socket = useRef();

    const observable = new Observable("custom");

    useEffect(() => {
        if (!localStorage.getItem("id")) {
            localStorage.setItem("id", (new Date().getTime()))
        };
        socket.current = socketClient(SERVER);

        // socket.current.on("connection", () => {
        // });

        socket.current.emit("connected", null);

        socket.current.on("count", (count) => {
            observable.publish({ count: count });
        });

        socket.current.on("message", (message) => {
            let item = document.createElement("div");
            let sessionId = localStorage.getItem("id");
            if (sessionId === message.id) {
                item.setAttribute("style", "text-align: right; font-weight: bold; white-space: wrap; padding-bottom: 15px");
            } else {
                item.setAttribute("style", " white-space: wrap; padding-bottom: 15px");
            }
            item.textContent = message.message;
            document.getElementById("display").append(item);
            // window.scrollTo(0, document.body.scrollHeight);
            document.getElementById("display").scrollTop = document.getElementById("display").scrollHeight;
            let customEvent = new CustomEvent("customevent", { detail: message });
            window.dispatchEvent(customEvent);
        });

        socket.current.on("output-messages", (result) => {
            document.getElementById("display").textContent = "";
            let sessionId = localStorage.getItem("id");
            result.map((record) => {
                let item = document.createElement("div");
                if (sessionId === record.id) {
                    item.setAttribute("style", "text-align: right; font-weight: bold; white-space: wrap; padding-bottom: 15px");
                } else {
                    item.setAttribute("style", " white-space: wrap; padding-bottom: 15px");
                }
                item.textContent = record.message;
                document.getElementById("display").append(item);
            });
            // window.scrollTo(0, document.body.scrollHeight);
            document.getElementById("display").scrollTop = document.getElementById("display").scrollHeight;
        });

    }, []);

    const onSend = (message) => {
        socket.current.emit("send-message", message);
    }; 

    return (
        <Card style={{ maxWidth: "320px", alignItems: "center", fontFamily: "Algebra Web,Georgia,serif" }}>
            <CardContent>
                <div id="display" style={{ padding: "10px", maxWidth: "300px", maxHeight: "200px", overflowY: "auto" , lineHeight: 1.2, wordWrap: "break-word" }} />
            </CardContent>
            <ChatInput style={{ width: "100%" }} onSend={onSend} />
        </Card>
        // <Chat />
    );
}

export default App;