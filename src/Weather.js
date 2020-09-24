import React, { useState } from 'react'
import { fetchWeather } from './fetchWeather'
import './Weather.css';

function Weather() {

    const [query, setQuery] = useState('');
    const [weather, setWeather] = useState({});

    const search = async (e) => {
        if (e.key === 'Enter') {
            console.log("Pressed")
            const data = await fetchWeather(query);

            setWeather(data);
            setQuery('');
        }
    }

    return (
        <div className="weather-app main-container">
            <h1>How's weather today?</h1>
            <input type="text" className="search weather-search" placeholder="City" value={query} onChange={(e) => setQuery(e.target.value)} onKeyPress={search} />

            {weather.main && (
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.name}</span>
                        <sup>{weather.sys.country}</sup>
                    </h2>
                    <div className="city-temp">
                        {Math.round(weather.main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div>
                        <span className="pad">Min:{Math.round(weather.main.temp_min)} </span><span className="pad">Max:{Math.round(weather.main.temp_max)}</span>
                    </div>
                    <div>
                        <span className="pad">Pressure: {Math.round(weather.main.pressure)} mbar</span>
                    </div>
                    <div>
                        <span className="pad">Humidity: {Math.round(weather.main.humidity)} g/kg</span>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                        <p>{weather.weather[0].description}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Weather
