import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import coordinates from '../data/coordinates.json';
class S1 extends Component {
  state = {
    zoom: 5,
  };

//  componentDidMount() 
//{ fetch('/api/coordinates') // Replace with your API endpoint
  //  .then(response => response.json())
    //.then(coordinates => this.setState({ coordinates }));
//}


  render() {
    return (
      <Map className="map" center={coordinates[0]} zoom={this.state.zoom}>
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
    );
  }
}

export default S1;
