import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./App";

const mount = (ele, { onNavigate, initialPath }) => {
    const memoryHistory = createMemoryHistory({ // I think the decision to use memoryHistory was for the container app to handle the url routing but for the remote app to still be internally aware of it
        initialEntries: [initialPath], // takes the initial path sent by the container to update the initial path state
    });
    
    if (onNavigate) {
        memoryHistory.listen(onNavigate); // when the memory history navigates, fire that onNavigate callback
    };

    const root = ReactDOMClient.createRoot(ele);
    root.render(<App history={memoryHistory} />);

    return {
        onParentNavigate({ location: nextLocation}) {
            if (memoryHistory.location.pathname !== nextLocation.pathname) {
                memoryHistory.push(nextLocation.pathname);
            };
        },
    };
};

// separated the mounting from container app from individually starting the remote app
if (process.env.NODE_ENV === "development") {
    if (document.getElementById("header-root")) {
        const browserHistory = createBrowserHistory();
        const headerRoot = ReactDOMClient.createRoot(document.getElementById("header-root"));
        headerRoot.render(<App history={browserHistory} />);
    }
};

export { mount };