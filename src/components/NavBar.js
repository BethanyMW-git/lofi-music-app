import { Song } from './Song'

//In my inspiration app, when the user clicks on the LOFIMUSIC site title,
//it is programmed to shuffle to a random song. This can be an optional
//feature for me to build in as a separate component.

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
            <a href="/" className="site-title">LOFIMUSIC</a>
            <ul>
                <li>
                    <a href="/bootleg-smoke" className="song" onClick={() => {return (<Song prop={songs[0]}/>)}}>BOOTLEG SMOKE</a>
                </li>
                <li>
                    <a href="/chillhop-raccoon" className="song" onClick={() => {return (<Song prop={songs[1]}/>)}}>CHILLHOP RACCOON</a>
                </li>
                <li>
                    <a href="/chillhop-relaxing-raccoon" className="song" onClick={() => {return (<Song prop={songs[2]}/>)}}>CHILLHOP RELAXING RACCOON</a>
                </li>
                <li>
                    <a href="/college-guy" className="song" onClick={() => {return (<Song prop={songs[3]}/>)}}>COLLEGE GUY</a>
                </li>
                <li>
                    <a href="/college-lonely" className="song" onClick={() => {return (<Song prop={songs[4]}/>)}}>COLLEGE LONELY</a>
                </li>
                <li>
                    <a href="dreamhop" className="song" onClick={() => {return (<Song prop={songs[5]}/>)}}>DREAMHOP</a>
                </li>
                <li>
                    <a href="everything-fades-to-blue" className="song" onClick={() => {return (<Song prop={songs[6]}/>)}}>EVERYTHING FADES TO BLUE</a>
                </li>
                <li>
                    <a href="lofi-girl" className="song" onClick={() => {return (<Song prop={songs[7]}/>)}}>LOFI GIRL</a>
                </li>
                <li>
                    <a href="lofi-sleepy-girl" className="song" onClick={() => {return (<Song prop={songs[8]}/>)}}>LOFI SLEEPY GIRL</a>
                </li>
                <li>
                    <a href="taiki" className="song" onClick={() => {return (<Song prop={songs[9]}/>)}}>TAIKI</a>
                </li>
            </ul>
        </nav>
    </div>
    )
}