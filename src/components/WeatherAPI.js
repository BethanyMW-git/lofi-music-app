//atlanta latitude and longitude: 33.7488° N, 84.3877° W
//paris, france lat: 48.864716, lon: 2.349014

import { useState, useEffect } from 'react';

const URL = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';

export default function WeatherAPI() {
    const [temp, setTemp] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
          const result = await fetch(URL)
          result.json().then(json => {
            setTemp(json.current.temp_f)
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

// const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'df66c6a4c5mshbd849669f02df78p13d5acjsn92aef5adc0f7',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }