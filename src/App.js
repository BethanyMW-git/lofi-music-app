import react, { useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router-dom";
import AudioPlayer from "./components/AudioPlayer";
import LofiListenCounter from "./components/LofiListenCounter";

export default function App() {
	const [listenCount, setListenCount] = useState(0);
	return (
		<div className="App">
			<NavBar setListenCount={() => setListenCount(listenCount + 1)} />
			{/* <AudioPlayer /> */}
			<div id="detail" className="container">
				<Outlet />
			</div>
			<LofiListenCounter listenCount={listenCount} />
		</div>
	);
}
