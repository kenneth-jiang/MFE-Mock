import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import InputComponent from "./components/InputComponent";
import AboutComponent from "./components/AboutComponent";
import LocalizationComponent from "./components/LocalizationComponent";
import CustomRouter from "./CustomRouter";

export default () => {
	return (
		<BrowserRouter>
			<HeaderComponent />
			<Suspense fallback={"Loading..."}>
				<Routes>
					<Route path="/about" element={<AboutComponent />} />
					<Route path="/990-finder" element={<InputComponent />} />
					<Route path="/localization" element={<LocalizationComponent />} />
					<Route path="/" element={<div>Hello World!</div>} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
};