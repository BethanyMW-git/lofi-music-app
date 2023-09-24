import { Song } from './Song'
import { Link } from 'react-router-dom'

export function NavBar() {
 
    const songs = [
        "BOOTLEG SMOKE",
        "CHILLHOP RACCOON",
        "CHILLHOP RELAXING RACCOON",
        "COLLEGE GUY",
        "COLLEGE LONELY",
        "DREAMHOP",
        "EVERYTHING FADES TO BLUE",
        "LOFI GIRL",
        "LOFI SLEEPY GIRL",
        "TAIKI"
    ];

    return (
    <div class="nav-container">
        <nav className="nav">
            <Link to="/" className="site-title">LOFIMUSIC</Link>
            <ul>
                <li>
                    <Link to="/bootleg-smoke" className="song" onClick={() => {return (<Song prop={songs[0]}/>)}}>BOOTLEG SMOKE</Link>
                </li>
                <li>
                    <Link to="/chillhop-raccoon" className="song" onClick={() => {return (<Song prop={songs[1]}/>)}}>CHILLHOP RACCOON</Link>
                </li>
                <li>
                    <Link to="/chillhop-relaxing-raccoon" className="song" onClick={() => {return (<Song prop={songs[2]}/>)}}>CHILLHOP RELAXING RACCOON</Link>
                </li>
                <li>
                    <Link to="/college-guy" className="song" onClick={() => {return (<Song prop={songs[3]}/>)}}>COLLEGE GUY</Link>
                </li>
                <li>
                    <Link to="/college-lonely" className="song" onClick={() => {return (<Song prop={songs[4]}/>)}}>COLLEGE LONELY</Link>
                </li>
                <li>
                    <Link to="dreamhop" className="song" onClick={() => {return (<Song prop={songs[5]}/>)}}>DREAMHOP</Link>
                </li>
                <li>
                    <Link to="everything-fades-to-blue" className="song" onClick={() => {return (<Song prop={songs[6]}/>)}}>EVERYTHING FADES TO BLUE</Link>
                </li>
                <li>
                    <Link to="lofi-girl" className="song" onClick={() => {return (<Song prop={songs[7]}/>)}}>LOFI GIRL</Link>
                </li>
                <li>
                    <Link to="lofi-sleepy-girl" className="song" onClick={() => {return (<Song prop={songs[8]}/>)}}>LOFI SLEEPY GIRL</Link>
                </li>
                <li>
                    <Link to="taiki" className="song" onClick={() => {return (<Song prop={songs[9]}/>)}}>TAIKI</Link>
                </li>
            </ul>
        </nav>
    </div>
    )
}