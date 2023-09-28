import React from 'react';
import {createRoot} from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "../styles/App.css";

import ChillHopRaccoon from '../pages/ChillHopRaccoon'
import ChillHopRelaxingRaccoon from '../pages/ChillHopRelaxingRaccoon'
import CollegeGuy from '../pages/CollegeGuy'
import CollegeLonely from '../pages/CollegeLonely'
import DreamHop from '../pages/DreamHop'
import ErrorPage from '../pages/ErrorPage'
import Synthwave from '../pages/Synthwave'
import Home from '../pages/Home'
import LofiGirl from '../pages/LofiGirl'
import LofiSleepyGirl from '../pages/LofiSleepyGirl'
import MidnightStargazing from '../pages/MidnightStargazing'
import Taiki from '../pages/Taiki'

export default function SiteRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "ChillHopRaccoon",
                    element: <ChillHopRaccoon />
                },
                {
                    path: "ChillHopRelaxingRaccoon",
                    element: <ChillHopRelaxingRaccoon />
                },
                {
                    path: "CollegeGuy",
                    element: <CollegeGuy />
                },
                {
                    path: "CollegeLonely",
                    element: <CollegeLonely />
                },
                {
                    path: "DreamHop",
                    element: <DreamHop />
                },
                {
                    path: "Synthwave",
                    element: <Synthwave />
                },
                {
                    path: "LofiGirl",
                    element: <LofiGirl />
                },
                {
                    path: "LofiSleepyGirl",
                    element: <LofiSleepyGirl />
                },
                {
                    path: 'MidnightStargazing',
                    element: <MidnightStargazing />
                },
                {
                    path: "Taiki",
                    element: <Taiki />
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
            ]
        }
    ]);

    createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
 }