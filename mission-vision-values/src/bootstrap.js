import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./App";

const mount = (ele, { onNavigate, initialPath }) => {
    const memoryHistory = createMemoryHistory({
        initialEntries: [initialPath],
    });

    if (onNavigate) {
        memoryHistory.listen(onNavigate);
    };

    const root = ReactDOMClient.createRoot(ele);
    root.render(<App history={memoryHistory} />);

    return {
        onParentNavigate({ location: nextLocation }) {
            const { pathname } = memoryHistory.location;

            if (pathname !== nextLocation.pathname) {
                memoryHistory.push(nextLocation.pathname);
            };
        },
    };
};

if (process.env.NODE_ENV === "development") {
    if (document.getElementById("missionvisionvalues-root")) {
        const browserHistory = createBrowserHistory();
        const missionVisionValuesRoot = ReactDOMClient.createRoot(document.getElementById("missionvisionvalues-root"));
        missionVisionValuesRoot.render(<App history={browserHistory} />);
    }
};

export { mount };