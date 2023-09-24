import { Header } from "./Header";

export function Song() {
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
        <>
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ejPxNyktUXU?si=vpwrEKXN_XeBtRoH&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <Header className="song-header"/>
        </>
    );
}