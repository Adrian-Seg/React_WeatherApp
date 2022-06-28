import React from 'react';

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