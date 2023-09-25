import { Header } from "./Header";

export function Song() {
    //const songs = ["BOOTLEG SMOKE", "CHILLHOP RACCOON", "CHILLHOP RELAXING RACCOON", "COLLEGE GUY", "COLLEGE LONELY", "DREAMHOP", "EVERYTHING FADES TO BLUE", "LOFI GIRL", "LOFI SLEEPY GIRL", "TAIKI"];
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [songs, setSongs] = useState([]);
    
    //the empty dependency array [] means this useEffect will run once

    useEffect(() => {
        fetch("https://api.example.com/items") //update this placeholder url with the YouTube API one
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
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
            <div>{songs}</div> //code is not finished
        )
    }

    //return (
        //<>
        //<div>
            //<iframe width="560" height="315" src="https://www.youtube.com/embed/ejPxNyktUXU?si=vpwrEKXN_XeBtRoH&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        //</div>
        //<Header className="song-header"/>
        //</>
    //);
}