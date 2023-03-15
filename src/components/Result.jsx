import React from 'react';

const Result = ({ weather }) => {

    const { error, date, sunrise, sunset, temp, pressure, wind, city } = weather;

    let content = null;

    if (!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});

        content = (
            <>
                <h1>Weather for the city <em>{city}</em></h1>
                <h2>Day and time: {date}</h2>
                <h2>Current temperature: {temp} &#176;C</h2>
                <h2>Sunrise today: {sunriseTime}</h2>
                <h2>Sunset today: {sunsetTime}</h2>
                <h2>Current wind strength: {wind} m/s</h2>
                <h2>Current pressure: {pressure} hPa</h2>
            </>
        )
    }

    return (
        <div className='result'>
        { error ? `We don't have ${city} in our database` : content }
        </div>
    );
};

export default Result;
