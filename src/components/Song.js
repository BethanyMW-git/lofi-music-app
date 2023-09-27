import React, {useState, useEffect } from 'react'; //removed YT for testing purposes
export function Song() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [songs, setSongs] = useState([]);
    
    //the empty dependency array [] means this useEffect will run once
    //Here I would like to use the YouTube Embedded Player API to play a video/song after a specific title is clicked from the Nav
    //"https://www.youtube.com/iframe_api"
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(URL)
            console.log(result)
        }
    
        fetch()
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setSongs(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded){
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <div id="player">The iframe and video player will replace this div tag</div>
            </>
        )
    }
}

// Starter code from YouTube API documentation below :

// 2. This code loads the IFrame Player API code asynchronously.
    //   var tag = document.createElement('script');

    //   tag.src = "https://www.youtube.com/iframe_api";
    //   var firstScriptTag = document.getElementsByTagName('script')[0];
    //   firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player after the API code downloads.
    //   var player;
    //   function onYouTubeIframeAPIReady() {
    //     player = new YT.Player('player', {
    //       height: '390',
    //       width: '640',
    //       videoId: 'M7lc1UVf-VE',
    //       playerVars: {
    //         'playsinline': 1
    //       },
    //       events: {
    //         'onReady': onPlayerReady,
    //         'onStateChange': onPlayerStateChange
    //       }
    //     });
    //   }

// 4. The API will call this function when the video player is ready.
    //   function onPlayerReady(event) {
    //     event.target.playVideo();
    //   }

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
    //    var done = false;
    //    function onPlayerStateChange(event) {
    //      if (event.data == YT.PlayerState.PLAYING && !done) {
    //        setTimeout(stopVideo, 6000);
    //        done = true;
    //      }
    //    }
    //    function stopVideo() {
    //      player.stopVideo();
    //    }