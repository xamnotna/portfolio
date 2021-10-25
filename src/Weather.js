import React,  { useState, useEffect } from 'react';

const url = `http://api.openweathermap.org/data/2.5/weather?q=märsta,se&APPID=672b2390a218660a3564c7f876aee0fa&units=metric`;

function Weather(){

    const [data, setData] = useState({ data: null });

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(json => setData({ data: json })); 
    }, []);

    return(
        <span>The weather in Märsta: {!data.data ? '?' : data.data.main.temp} °C</span>
    )

}

export default Weather;