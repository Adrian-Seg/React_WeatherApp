import React, { useState, FC } from 'react';

// interface LocationSearchProps {
//     onSearch: (search: string) => void;
// }

export const LocationSearch = ({ onSearch }) => {

    const [locationSearch, setLocationSearch] = useState('');
    const [locations, setLocations] = useState(['']);
    const disableSearch = locationSearch.trim() === '';

    const addLocation = () => {
        onSearch(locationSearch);
        setLocations([locationSearch, ...locations]);
        setLocationSearch('');
    }

    return (
        <div>
            <label>Add Location
                <input
                    type="text"
                    value={locationSearch}
                    onChange={e => setLocationSearch(e.target.value)}
                />
            </label>
            <button className="btn btn-primary" onClick={addLocation} disabled={disableSearch}>Search</button>
        </div>
    )
}