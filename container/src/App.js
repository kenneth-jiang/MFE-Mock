import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const HeaderLazy = lazy(() => import("./components/HeaderComponent"));
const InputLazy = lazy(() => import("./components/InputComponent"));
const AboutLazy = lazy(() => import("./components/AboutComponent"));
const LocalizationLazy = lazy(() => import("./components/LocalizationComponent"));
// import HeaderComponent from "./components/HeaderComponent";
// import InputComponent from "./components/InputComponent";
// import AboutComponent from "./components/AboutComponent";
// import LocalizationComponent from "./components/LocalizationComponent";
import CustomRouter from "./CustomRouter";

export default () => {
	return (
		<BrowserRouter>
			<HeaderLazy />
			<Suspense fallback={"Loading..."}>
				<Routes>
					<Route path="/990-finder" element={<InputLazy />} />
					<Route path="/about" element={<AboutLazy />} />
					<Route path="/localization" element={<LocalizationLazy />} />
					<Route path="/" element={<div>Hello World! This page should be rendered when the Candid logo is clicked.</div>} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};