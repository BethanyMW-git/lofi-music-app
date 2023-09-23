import React from 'react';
import './App.css';
import { NavBar } from "./components/NavBar"
import { Header } from "./components/Header"
import { AudioPlayer } from './components/AudioPlayer';

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <AudioPlayer />
    </div>
  );
}
