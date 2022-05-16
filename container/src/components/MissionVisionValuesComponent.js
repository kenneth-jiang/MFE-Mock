import React from "react";
import { mount } from "missionvisionvalues/MissionVisionValuesComponent";
import RemoteAppWrapper from "../hoc/RemoteAppWrapper";

const MissionVisionValuesComponent = () => {
    return <RemoteAppWrapper mount={mount} />
};

export default MissionVisionValuesComponent;