import React, { FC } from 'react';
import { IWeather } from '../models/Weather';
import { getIconUrl } from '../services/WeatherService';
import { convertUnixTimeToDate } from '../services/TimeUtilities';

// interface WeatherEntryProps {
//     weather: IWeather;
// }

export const WeatherEntry = ({ weather }) => {
    return (
        <div>
            <div>{convertUnixTimeToDate(weather.dt).toLocaleTimeString()} {convertUnixTimeToDate(weather.dt).toLocaleDateString()}</div>
            <div>
                <strong>{weather.main.temp}</strong>
                <div>({weather.main.temp_min}F / {weather.main.temp_max}F)</div>
            </div>
            <div>Humidity: {weather.main.humidity}%</div>
            {
                weather.weather.map(condition => 
                    <div key={condition.id}>
                        <img src={getIconUrl(condition.icon)} alt={condition.main} />
                        {condition.main}
                        {condition.description}
                    </div>
                )
            }
        </div>
    )
}