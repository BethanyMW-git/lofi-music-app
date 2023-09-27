import { Song } from "../components/Song";

//<Song onClick={songs[1].name}/>

export default function BootlegSmoke(songs) {
    return (
    <>
    
    <h1>{songs[0]}</h1>
    <hr />
    <h2>from the bootleg boy channel</h2>

    <div class="youtube-video">
        <iframe
            class="unselectable"
            id="youtube-player"
            frameborder="0"
            allowfullscreen="1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            title="lofi hip hop radio 😴 sad &amp; sleepy beats"
            width="640"
            height="360"
            src="https://www.youtube.com/embed/jfKfPfyJRdk?playsinline=1&amp;origin=https%3A%2F%2Flofimusic.app&amp;autoplay=1&amp;controls=0&amp;modestbranding=1&amp;disablekb=1&amp;iv_load_policy=3&amp;enablejsapi=1&amp;widgetid=1"
            data-gtm-yt-inspected-6="true">
        </iframe>
    </div>
    </>
    )
}