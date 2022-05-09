// import { mount } from "input/InputComponent";
// import React, { useRef, useEffect, useContext } from "react";
// import { useNavigate, useLocation, UNSAFE_NavigationContext } from "react-router-dom";
// import { createBrowserHistory } from "history";

// export default () => {
//     const ref = useRef(null);
//     const navigate = useNavigate();
//     const location = useLocation();
//     // const history = createBrowserHistory();
//     const { navigator } = useContext(UNSAFE_NavigationContext);

//     useEffect(() => {
//         const { onParentNavigate } = mount(ref.current, {
//             initialPath: location.pathname,
//             // onNavigate: ({ pathname: nextPathname }) => {
//             onNavigate: ({ location: nextLocation }) => {
//                 const { pathname } = location;

//                 if (pathname !== nextLocation.pathname) {
//                     navigate(nextLocation.pathname);
//                 }
//             },
//         });

//         navigator.listen(onParentNavigate);
//     }, []);

//     return <div ref={ref} />;
// };

import React from "react";
import { mount } from "input/InputComponent";
import RemoteAppWrapper from "../hoc/RemoteAppWrapper";

const InputComponent = () => {
    return <RemoteAppWrapper mount={mount} />
};

export default InputComponent;