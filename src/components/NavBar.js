import { Song } from './Song'
import { Link } from 'react-router-dom'

export default function NavBar() {
    const path = window.location.pathname

    return (
    <div class="nav-container">
        <nav className="nav">
            <Link to="/" className="site-title">LOFI LIVE</Link>
            <ul>
                <li>
                    <Link to="/BootlegSmoke" className="song">BOOTLEG SMOKE</Link>
                </li>
                <li>
                    <Link to="/ChillHopRaccoon" className="song">CHILLHOP RACCOON</Link>
                </li>
                <li>
                    <Link to="/ChillHopRelaxingRaccoon" className="song">CHILLHOP RELAXING RACCOON</Link>
                </li>
                <li>
                    <Link to="/CollegeGuy" className="song">COLLEGE GUY</Link>
                </li>
                <li>
                    <Link to="/CollegeLonely" className="song">COLLEGE LONELY</Link>
                </li>
                <li>
                    <Link to="/DreamHop" className="song">DREAMHOP</Link>
                </li>
                <li>
                    <Link to="/LofiGirl" className="song">LOFI GIRL</Link>
                </li>
                <li>
                    <Link to="/LofiSleepyGirl" className="song">LOFI SLEEPY GIRL</Link>
                </li>
                <li>
                    <Link to="/Synthwave" className="song">SYNTHWAVE</Link>
                </li>
                <li>
                    <Link to="/Taiki" className="song">TAIKI</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}