import React, { useRef, useEffect, useContext } from "react";
import { useNavigate, UNSAFE_NavigationContext } from "react-router-dom";

export default ({ mount }) => {
    const ref = useRef(null);
    const navigate = useNavigate();
    const { navigator } = useContext(UNSAFE_NavigationContext);

    useEffect(() => {
        // const { onParentNavigate } = mount(ref.current, {
        //     initialPath: navigator.location.pathname,
        //     onNavigate: ({ location: nextLocation }) => {
        //         if (navigator.location.pathname !== nextLocation.pathname) {
        //             navigate(nextLocation.pathname);
        //         };
        //     },
        // });
        // navigator.listen(onParentNavigate);

        // rewrote to hopefully be more understandable
        // returns a function onParentNavigate after mounting the elemment
        const { onParentNavigate } = mount( // accepts two arguments, reference to some element, and an obj that sends rendered path and an event listener that fires when url changes
            ref.current, //creating a ref for the remote app to be rendered on 
            {
                initialPath: navigator.location.pathname, // initial path we first load the page, usually "/" but can directly navigate to another path in address bar
                onNavigate: ({ location }) => { // when remote app navigates, we want to capture that path
                    let nextPathname = location.pathname; // path that the remote app navigated to
                    let currentPathname = navigator.location.pathname; // current path of the container app
                    if (currentPathname !== nextPathname) { // if the paths are different then
                        navigate(nextPathname); // container app updates the url
                    };
                },
            }
        );

        navigator.listen(onParentNavigate); // the container app's history listens to any changes to the url and if it does, it sends that new path to the remote app

    }, []);

    return <div ref={ref} />;
};
