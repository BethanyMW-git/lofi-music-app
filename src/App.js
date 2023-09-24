import React from 'react';
import './App.css';
import { NavBar } from "./components/NavBar"
import { Header } from "./components/Header"
import { AudioPlayer } from './components/AudioPlayer'
import { BootlegSmoke } from './pages/BootlegSmoke'
import { ChillHopRaccoon } from './pages/ChillHopRaccoon'
import { ChillHopRelaxingRaccoon } from './pages/ChillHopRelaxingRaccoon'
import { CollegeGuy } from './pages/CollegeGuy'
import { CollegeLonely } from './pages/CollegeLonely'
import { DreamHop } from './pages/DreamHop'
import { EverythingFadesToBlue } from './pages/EverythingFadesToBlue'
import { LofiGirl } from './pages/LofiGirl'
import { LofiSleepyGirl } from './pages/LofiSleepyGirl'
import { Taiki } from './pages/Taiki'

export default function App() {

  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = App
      break
    case "/BootlegSmoke":
      Component = BootlegSmoke
      break
    case "/ChillHopRaccoon":
      Component = ChillHopRaccoon
      break
    case "/ChillHopRelaxingRaccoon":
      Component = ChillHopRelaxingRaccoon
      break
    case "/CollegeGuy":
      Component = CollegeGuy
      break
    case "/CollegeLonely":
      Component = CollegeLonely
      break
    case "/DreamHop":
      Component = DreamHop
      break
    case "/EverythingFadesToBlue":
      Component = EverythingFadesToBlue
      break
    case "/LofiGirl":
      Component = LofiGirl
      break
    case "LofiSleepyGirl":
      Component = LofiSleepyGirl
      break
    case "Taiki":
      Component = Taiki
      break
  }

  return (
    <div className="App">
      <NavBar />
      <AudioPlayer />
    </div>
  );
}
