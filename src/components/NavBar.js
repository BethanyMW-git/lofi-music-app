import { Song } from './Song'

//In my inspiration app, when the user clicks on the LOFIMUSIC site title,
//it is programmed to shuffle to a random song. This can be an optional
//feature for me to build in as a separate component.

export function NavBar() {



    return (
    <div class="nav-container">
        <nav className="nav">
            <a href="/" className="site-title">LOFIMUSIC</a>
            <ul>
                <li>
                    <Song />
                </li>
                <li>
                    <a href="/bootleg-smoke" className="song">BOOTLEG SMOKE</a>
                </li>
                <li>
                    <a href="/chillhop-raccoon" className="song">CHILLHOP RACCOON</a>
                </li>
                <li>
                    <a href="/chillhop-relaxing-raccoon" className="song">CHILLHOP RELAXING RACCOON</a>
                </li>
                <li>
                    <a href="/college-guy" className="song">COLLEGE GUY</a>
                </li>
                <li>
                    <a href="/college-lonely" className="song">COLLEGE LONELY</a>
                </li>
                <li>
                    <a href="dreamhop" className="song">DREAMHOP</a>
                </li>
                <li>
                    <a href="everything-fades-to-blue" className="song">EVERYTHING FADES TO BLUE</a>
                </li>
                <li>
                    <a href="lofi-girl" className="song">LOFI GIRL</a>
                </li>
                <li>
                    <a href="lofi-sleepy-girl" className="song">LOFI SLEEPY GIRL</a>
                </li>
                <li>
                    <a href="taiki" className="song">TAIKI</a>
                </li>
            </ul>
        </nav>
    </div>
    )
}