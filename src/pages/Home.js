import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import WeatherAPI from '../components/WeatherAPI';
export default function Home() {
    return (
        <>
        <NavBar />
        <WeatherAPI />
        <div id="detail" className="container">
            <Outlet />
        </div>
        </>
    )
}