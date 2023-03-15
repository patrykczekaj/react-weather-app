import React from 'react';

const Result = ({ weather }) => {

    const { error, date, sunrise, sunset, temp, pressure, wind, city } = weather;

    let content = null;

    if (!error && city) {

        const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});
        const sunsetTime = new Date(sunset * 1000).toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'});

        content = (
            <div>
                <h3>Weather for the city <em>{city}</em></h3>
                <h4>Day and time: {date}</h4>
                <h4>Current temperature: {temp} &#176;C</h4>
                <h4>Sunrise today: {sunriseTime}</h4>
                <h4>Sunset today: {sunsetTime}</h4>
                <h4>Current wind strength: {wind} m/s</h4>
                <h4>Current pressure: {pressure} hPa</h4>
            </div>
        )
    }

    return (
        <div className='result'>
        { error ? `We don't have ${city} in our database` : content }
        </div>
    );
};

export default Result;
