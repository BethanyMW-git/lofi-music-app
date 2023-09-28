import { Link } from 'react-router-dom'
import LofiListenCounter from './LofiListenCounter'

export default function NavBar(LofiListenCounter) {

    return (
    <div class="nav-container">
        <nav className="nav">
            <Link to="/" className="site-title">LOFI LIVE</Link>
            <ul>
                <li>
                    <Link to="/ChillHopRaccoon" className="song" onClick={LofiListenCounter}>CHILLHOP RACCOON</Link>
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
                    <Link to="/MidnightStargazing" className="song">MIDNIGHT STARGAZING</Link>
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