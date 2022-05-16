import React from "react";
import { mount } from "subchat/SubChatComponent";
import RemoteAppWrapper from "../hoc/RemoteAppWrapper";

const SubChatComponent = () => {
    return <RemoteAppWrapper mount={mount} />
};

export default SubChatComponent;