// import { mount } from "header/HeaderComponent";
// import React, { useState, useRef, useEffect, useContext } from "react";
// import { useNavigate, UNSAFE_NavigationContext } from "react-router-dom";

// export default () => {
//     const ref = useRef(null);
//     const navigate = useNavigate();
//     const { navigator } = useContext(UNSAFE_NavigationContext);

//     useEffect(() => {
//         const { onParentNavigate } = mount(ref.current, {
//             initialPath: navigator.location.pathname,
//             onNavigate: ({ location: nextLocation }) => {
//                 if (navigator.location.pathname !== nextLocation.pathname) {
//                     navigate(nextLocation.pathname);
//                 };
//             },
//         });

//         navigator.listen(onParentNavigate);
//     }, []);

//     return <div ref={ref} />;
// };

import React from "react";
import { mount } from "header/HeaderComponent";
import RemoteAppWrapper from "../hoc/RemoteAppWrapper";

const HeaderComponent = () => {
    return <RemoteAppWrapper mount={mount} />
};

export default HeaderComponent;