import React from 'react';
import './styles/App.css';
import NavBar from "./components/NavBar";
import SiteRoutes from "./components/SiteRoutes";

export default function App() {

  return (
    <div className="App">
      <NavBar />
      <SiteRoutes />
    </div>
  );
}
