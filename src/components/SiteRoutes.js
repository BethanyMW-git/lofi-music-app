import { Route, Routes } from 'react-router-dom'
import BootlegSmoke from './pages/BootlegSmoke'
import ChillHopRaccoon from './pages/ChillHopRaccoon'
import ChillHopRelaxingRaccoon from './pages/ChillHopRelaxingRaccoon'
import CollegeGuy from './pages/CollegeGuy'
import CollegeLonely from './pages/CollegeLonely'
import DreamHop from './pages/DreamHop'
import EverythingFadesToBlue from './pages/EverythingFadesToBlue'
import LofiGirl from './pages/LofiGirl'
import LofiSleepyGirl from './pages/LofiSleepyGirl'
import Taiki from './pages/Taiki'

export default function SiteRoutes() {
    return (
        <Routes>
            <Route path="/BootlegSmoke" element={<BootlegSmoke />} />
            <Route path="/ChillHopRaccoon" element={<ChillHopRaccoon />} />
            <Route
                path="/ChillHopRelaxingRaccoon"
                element={<ChillHopRelaxingRaccoon />}
            />
            <Route path="/CollegeGuy" element={<CollegeGuy />} />
            <Route path="/CollegeLonely" element={<CollegeLonely />} />
            <Route path="/DreamHop" element={<DreamHop />} />
            <Route
                path="/EverythingFadesToBlue"
                element={<EverythingFadesToBlue />}
            />
            <Route path="/LofiGirl" element={<LofiGirl />} />
            <Route path="/LofiSleepyGirl" element={<LofiSleepyGirl />} />
            <Route path="/Taiki" element={<Taiki />} />
        </Routes>
    )
}