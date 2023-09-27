import React from 'react';
import ReactDOM , {createRoot} from 'react-dom/client';
import { BrowserRouter, createBrowserRouter, RouterProvider, Route, Routes, Link } from 'react-router-dom'
import "../styles/App.css";

import BootlegSmoke from '../pages/BootlegSmoke'
import ChillHopRaccoon from '../pages/ChillHopRaccoon'
import ChillHopRelaxingRaccoon from '../pages/ChillHopRelaxingRaccoon'
import CollegeGuy from '../pages/CollegeGuy'
import CollegeLonely from '../pages/CollegeLonely'
import DreamHop from '../pages/DreamHop'
import ErrorPage from '../pages/ErrorPage'
import EverythingFadesToBlue from '../pages/EverythingFadesToBlue'
import Home from '../pages/Home'
import LofiGirl from '../pages/LofiGirl'
import LofiSleepyGirl from '../pages/LofiSleepyGirl'
import Taiki from '../pages/Taiki'

export default function SiteRoutes() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "BootlegSmoke",
                    element: <BootlegSmoke />
                },
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
                    path: "EverythingFadesToBlue",
                    element: <EverythingFadesToBlue />
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

//     return (
//         <Routes>
//             <Route path="/BootlegSmoke" element={<BootlegSmoke />} />
//             <Route path="/ChillHopRaccoon" element={<ChillHopRaccoon />} />
//             <Route
//                 path="/ChillHopRelaxingRaccoon"
//                 element={<ChillHopRelaxingRaccoon />}
//             />
//             <Route path="/CollegeGuy" element={<CollegeGuy />} />
//             <Route path="/CollegeLonely" element={<CollegeLonely />} />
//             <Route path="/DreamHop" element={<DreamHop />} />
//             <Route
//                 path="/EverythingFadesToBlue"
//                 element={<EverythingFadesToBlue />}
//             />
//             <Route path="/LofiGirl" element={<LofiGirl />} />
//             <Route path="/LofiSleepyGirl" element={<LofiSleepyGirl />} />
//             <Route path="/Taiki" element={<Taiki />} />
//         </Routes>
//     )
 }