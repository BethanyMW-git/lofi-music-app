import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
export default function Home() {
    return (
        <>
        <NavBar />
        <div id="detail" className="container">
            <Outlet />
        </div>
        </>
    )
}