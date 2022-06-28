import React, { useState, FC } from 'react';
import { IWeatherLocation } from '../models/Weather';

// interface LocationTableProps {
//   locations: IWeatherLocation[];
//   current: IWeatherLocation | null;
//   onSelect: (location: IWeatherLocation) => void; 
// }

export const LocationTable = ({ locations, current, onSelect }) => {
  return (
    <div>
      <h2>Location</h2>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index} className={current?.id === location.id ? 'table-primary' : ''} onClick={() => onSelect(location)}>
              <td>{location.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};