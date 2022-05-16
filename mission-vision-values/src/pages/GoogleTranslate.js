import React, { useEffect } from "react";

export default () => {

    var userLang = navigator.language || navigator.userLanguage || navigator.languages;
    
    function googleTranslateElementInit() {
        new google.translate.TranslateElement({ pageLanguage: "en", includedLanguages: "en,en-US,es,zh-CN,ru,hi" }, "google_translate_element");
    };

    useEffect(() => {
        console.log('h')
        window.addEventListener("load", () => {
            console.log("hello")
            history.pushState(null, null, window.location.origin + window.location.pathname);
        });
        var addScript = document.createElement("script");
        addScript.setAttribute("src", "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit");
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
        if (!window.location.hash) {
            window.location = window.location + `#googtrans(en|${userLang})`;
            window.location.reload();
            if (window.location.hash) {
                window.location = window.location.host + window.location.pathname;
            }
        };
    }, [])
    
    return (
        <div>
            <h2 className="title gx-mb-4"></h2>
            <div id="google_translate_element"></div>
            <div className="gx-d-flex justify-content-center">
                <h4>Start building your app. Happy Coding!</h4>
            </div>

        </div>
    );
};