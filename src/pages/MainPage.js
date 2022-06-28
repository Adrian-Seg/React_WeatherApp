import React, { useState, FC } from 'react';
import { LocationSearch } from '../components/LocationSearch';
import { LocationTable } from '../components/LocationTable';
import { searchLocation } from '../services/WeatherService';
import { WeatherSummary } from '../components/WeatherSummary';
import '../styles/WeatherSummary.css'

const MainPage = () => {
    const [locations, setLocations] = useState([]);
    const [error, setError] = useState('');
    const [warning, setWarning] = useState('');
    const [currentLocation, setCurrentLocation] = useState(null)

    const resetAlerts = () => {
        setError('');
        setWarning('');
    }

    let addLocation = async (term) => {
        resetAlerts();
        const location = await searchLocation(term);
        if (!location) {
            setError(`No location found called ${term}!`);
        } else if (locations.find(item => item.id === location.id)) {
            setWarning(`Location ${term} is already in the list!`)
        } else {
            setLocations([location, ...locations]);
        }
    }

    return (
        <div className="App">
            <div>
                <h1>Weather Application</h1>
                <LocationSearch onSearch={addLocation} />
                {
                    error ? <div className={`alert alert-danger`}>{error}</div> : null
                }
                {
                    warning ? <div className={`alert alert-danger`}>{warning}</div> : null
                }
                <LocationTable locations={locations} current={currentLocation} onSelect={(location) => setCurrentLocation(location)} />
                <WeatherSummary location={currentLocation} />
            </div>
        </div>

    )
}

export default MainPage