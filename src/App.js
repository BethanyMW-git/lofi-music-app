import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
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
