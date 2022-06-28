import React, { useState, useEffect, FC } from 'react';
import { readWeather, readForeCast } from '../services/WeatherService';
import { WeatherEntry } from './WeatherEntry';
// interface WeatherSummaryProps {
//     location: IWeatherLocation | null;
// }

export const WeatherSummary = ({ location }) => {

    const [weather, setWeather] = useState(null);
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        (async function () {
            if (location) {
                const [weather, forecast] = await Promise.all([
                    readWeather(location.id),
                    readForeCast(location.id)
                ]);
                setWeather(weather);
                setForecast(forecast)
            }
        })();

    }, [location]);

    if (!location || !weather || !forecast) {
        return null;
    }

    return (
        <div>
            <hr />
            <h2>{location.name}</h2>
            <WeatherEntry weather={weather} />
            <h2>Forecast</h2>
            <div>
                <ol style={({whiteSpace: 'nowrap'})}>
                    {
                        forecast.map(timePoint => 
                            <li key={timePoint.dt}>
                                <WeatherEntry weather={timePoint} />
                            </li>    
                        )
                    }
                </ol>
            </div>
        </div>
    )
}