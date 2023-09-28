import { Link } from "react-router-dom";

export default function NavBar({ setListenCount }) {
	return (
		<div class="nav-container">
			<nav className="nav">
				<Link to="/" className="site-title">
					LOFI LIVE
				</Link>
				<ul>
					<li>
						<Link
							to="/ChillHopRaccoon"
							className="song"
							onClick={setListenCount}
						>
							CHILLHOP RACCOON
						</Link>
					</li>
					<li>
						<Link
							to="/ChillHopRelaxingRaccoon"
							className="song"
							onClick={setListenCount}
						>
							CHILLHOP RELAXING RACCOON
						</Link>
					</li>
					<li>
						<Link to="/CollegeGuy" className="song" onClick={setListenCount}>
							COLLEGE GUY
						</Link>
					</li>
					<li>
						<Link to="/CollegeLonely" className="song" onClick={setListenCount}>
							COLLEGE LONELY
						</Link>
					</li>
					<li>
						<Link to="/DreamHop" className="song" onClick={setListenCount}>
							DREAMHOP
						</Link>
					</li>
					<li>
						<Link to="/LofiGirl" className="song" onClick={setListenCount}>
							LOFI GIRL
						</Link>
					</li>
					<li>
						<Link
							to="/LofiSleepyGirl"
							className="song"
							onClick={setListenCount}
						>
							LOFI SLEEPY GIRL
						</Link>
					</li>
					<li>
						<Link
							to="/MidnightStargazing"
							className="song"
							onClick={setListenCount}
						>
							MIDNIGHT STARGAZING
						</Link>
					</li>
					<li>
						<Link to="/Synthwave" className="song" onClick={setListenCount}>
							SYNTHWAVE
						</Link>
					</li>
					<li>
						<Link to="/Taiki" className="song" onClick={setListenCount}>
							TAIKI
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}
