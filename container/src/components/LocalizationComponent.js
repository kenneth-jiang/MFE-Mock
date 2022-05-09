import React from "react";
import { mount } from "localization/LocalizationComponent";
import RemoteAppWrapper from "../hoc/RemoteAppWrapper";

const LocalizationComponent = () => {
    return <RemoteAppWrapper mount={mount} />
};

export default LocalizationComponent;