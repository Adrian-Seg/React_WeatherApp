import React from 'react';
import { getIconUrl } from '../services/WeatherService';
import { convertUnixTimeToDate } from '../services/TimeUtilities';

export const WeatherEntry = ({ weather }) => {
    return (
        <div>
            <div>{convertUnixTimeToDate(weather.dt).toLocaleDateString()}</div>
            <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()}</div>
            <div>
                <strong>{weather.main.temp}</strong>
                <div>(Min: {weather.main.temp_min}℉ / High: {weather.main.temp_max}℉)</div>
            </div>
            <div>Humidity: {weather.main.humidity}%</div>
            {
                weather.weather.map(condition => 
                    <div key={condition.id}>
                        <img src={getIconUrl(condition.icon)} alt={condition.main} />
                        {condition.main}
                        {/* {condition.description} */}
                    </div>
                )
            }
        </div>
    )
}