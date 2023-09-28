import * as React from "react";

export default function LofiListenCounter({ listenCount }) {
	return (
		<p style={{ color: "red" }}>
			You've listened to this many Lofi Lives! : {listenCount}
		</p>
	);
}
