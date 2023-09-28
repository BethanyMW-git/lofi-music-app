import * as React from 'react';
import './styles/App.css';
import NavBar from "./components/NavBar";
import SiteRoutes from "./components/SiteRoutes";
//import WeatherAPI from './components/WeatherAPI';
import AudioPlayer from './components/AudioPlayer';

export default function App() {

  return (
    <div className="App">
      <NavBar />
      <SiteRoutes />
      <AudioPlayer />
    </div>
  );
}
