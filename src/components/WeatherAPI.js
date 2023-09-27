import { useState, useEffect } from 'react';

const URL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';

export default function WeatherAPI() {
    const [temp, setTemp] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch(URL)
          result.json().then(json => {
            console.log(json);
          })
        }
        fetchData();
    }, []);

    return (
        <div className="weather">
            Atlanta Temp Now: {temp}F
        </div>
    );
}