import React, { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import CircularProgress from '@mui/material/CircularProgress';
const HeaderLazy = lazy(() => import("./components/HeaderComponent"));
const InputLazy = lazy(() => import("./components/InputComponent"));
const AboutLazy = lazy(() => import("./components/AboutComponent"));
const MissionVisionValuesLazy = lazy(() => import("./components/MissionVisionValuesComponent"));
const ChatLazy = lazy(() => import("./components/ChatComponent"));
const SubChatLazy = lazy(() => import("./components/SubChatComponent"));
// const LocalizationLazy = lazy(() => import("./components/LocalizationComponent"));
// import HeaderComponent from "./components/HeaderComponent";
// import InputComponent from "./components/InputComponent";
// import AboutComponent from "./components/AboutComponent";
// import LocalizationComponent from "./components/LocalizationComponent";
import CustomRouter from "./CustomRouter";

export default () => {
	useEffect(() => {
		if (navigator.language !== "en") {
			document.cookie = "googtrans=/en/" + navigator.language;
			console.log(document.cookie)
		}
		return () => document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
	}, []);
	return (
		<BrowserRouter>
			<HeaderLazy />
			<Grid container>
				<Grid item xs={1} style={{ paddingLeft: "10px" }}>

				</Grid>
				<Grid item xs={9}>
					<Suspense fallback={<CircularProgress />}>
						<Routes>
							<Route path="/search" element={<InputLazy />} />
							<Route path="/about" element={<AboutLazy />} />
							<Route path="/mission-vision-values" element={<MissionVisionValuesLazy />} />
							<Route path="*" element={<Navigate to="/search" replace />} />
						</Routes>
					</Suspense>
				</Grid>
				<Grid item xs={2} style={{ paddingRight: "20px" }}>
					<div style={{ height: "50px" }} />
					<Suspense fallback={<CircularProgress />}>
						<SubChatLazy />
					</Suspense>
					<div style={{ height: "50px" }} />
					<Suspense fallback={<CircularProgress />}>
						<ChatLazy />
					</Suspense>
				</Grid>
			</Grid>
		</BrowserRouter>
	);
};