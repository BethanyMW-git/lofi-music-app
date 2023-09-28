import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";

import ChillHopRaccoon from "./pages/ChillHopRaccoon";
import ChillHopRelaxingRaccoon from "./pages/ChillHopRelaxingRaccoon";
import CollegeGuy from "./pages/CollegeGuy";
import CollegeLonely from "./pages/CollegeLonely";
import DreamHop from "./pages/DreamHop";
import ErrorPage from "./pages/ErrorPage";
import Synthwave from "./pages/Synthwave";
import LofiGirl from "./pages/LofiGirl";
import LofiSleepyGirl from "./pages/LofiSleepyGirl";
import MidnightStargazing from "./pages/MidnightStargazing";
import Taiki from "./pages/Taiki";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "ChillHopRaccoon",
				element: <ChillHopRaccoon />,
			},
			{
				path: "ChillHopRelaxingRaccoon",
				element: <ChillHopRelaxingRaccoon />,
			},
			{
				path: "CollegeGuy",
				element: <CollegeGuy />,
			},
			{
				path: "CollegeLonely",
				element: <CollegeLonely />,
			},
			{
				path: "DreamHop",
				element: <DreamHop />,
			},
			{
				path: "Synthwave",
				element: <Synthwave />,
			},
			{
				path: "LofiGirl",
				element: <LofiGirl />,
			},
			{
				path: "LofiSleepyGirl",
				element: <LofiSleepyGirl />,
			},
			{
				path: "MidnightStargazing",
				element: <MidnightStargazing />,
			},
			{
				path: "Taiki",
				element: <Taiki />,
			},
			// {
			//     element: <AuthLayout />,
			//     children: [
			//         {
			//             path: "login",
			//             element: <Login />,
			//             loader: redirectIfUser,
			//         },
			//         {
			//             path: "logout",
			//             action: logoutUser
			//         }
			//     ]
			// }
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
