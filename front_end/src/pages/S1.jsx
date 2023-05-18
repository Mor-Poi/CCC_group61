import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { useStateContext } from '../contexts/ContextProvider';
// import coordinates from '../data/coordinates.json';

const S1 = () => {
  const [zoom, setZoom] = useState(5);
  const [coordinates, setCoordinates] = useState([]); 
  const { currentMode } = useStateContext();

  useEffect(() => {
    fetch('/api/coordinates') 
      .then(response => response.json())
      .then(data => setCoordinates(data)); 
  }, []);

  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Distribution of the Four Most Frequently Used Emojis in Each State of Australia</h1>
      <Map className="map" center={coordinates[0]} zoom={zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {coordinates.map((coordinate, index) => {
          const emoji = JSON.parse(`"${coordinate.emoji}"`); // Parse emoji string
          const customIcon = L.divIcon({
            className: 'custom-icon',
            html: `<div>${emoji}</div>`, // Use parsed emoji in the HTML
            iconSize: [20, 20],
          });

          return (
            <Marker key={index} position={[coordinate.lat, coordinate.lng]} icon={customIcon}>
              <Popup>{coordinate.value}</Popup>
            </Marker>
          );
        })}
      </Map> 
    </div>
  );
}

export default S1;