import React from "react";
import { mount } from "chat/ChatComponent";
import RemoteAppWrapper from "../hoc/RemoteAppWrapper";

const ChatComponent = () => {
    return <RemoteAppWrapper mount={mount} />
};

export default ChatComponent;