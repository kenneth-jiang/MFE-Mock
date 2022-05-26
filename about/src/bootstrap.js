import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserHistory, createMemoryHistory } from "history";

import App from "./App";

const mount = (ele, { onNavigate, initialPath }) => {
    const memoryHistory = createMemoryHistory({
        initialEntries: [initialPath],
    });

    if (onNavigate) {
        memoryHistory.listen(onNavigate);
    };

    const root = createRoot(ele);
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
    if (document.getElementById("_about-root")) {
        const browserHistory = createBrowserHistory();
        const aboutRoot = createRoot(document.getElementById("_about-root"));
        aboutRoot.render(<App history={browserHistory} />);
    };
};

export { mount };