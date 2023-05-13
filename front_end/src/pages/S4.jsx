import React, { useRef, useEffect, useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1Ijoic2x5dGhlcmlubyIsImEiOiJjbGhpdXRjYmMwYm9tM2ZscmtmdGx3ZDJ5In0.w4ueS0LNoS1jaXZsTgE00A';
const S4 = () => {
  const australiaGeoJson = {
    "type": "Polygon",
    "coordinates": [
      [
        [112.9213, -43.7405],
        [153.5695, -10.6682],
        [129.0015, -15.3695],
        [129.0015, -54.7499],
        [112.9213, -43.7405]
      ]
    ]
  };
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(133.7751);
  const [lat, setLat] = useState(-25.2744);
  const [zoom, setZoom] = useState(3.60);
  const { currentMode } = useStateContext();
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [lng, lat],
        zoom: zoom
    });});

    useEffect(() => {
      if (!map.current) return; // wait for map to initialize
      map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
      });},);
      const [setMap] = useState(null);

  useEffect(() => {
    const initializeMap = ({ setMap, mapContainer }) => {

      map.on('load', () => {
        map.addSource('australia', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/m-hoerz/australian-states/master/states.geojson',
        });

        map.addLayer({
          id: 'australia-polygon',
          type: 'fill',
          source: 'australia',
          paint: {
            'fill-color': '#088',
            'fill-opacity': 0.4,
          },
        });
      });

      setMap(map);
    };

    if (!map) initializeMap({ setMap, mapContainer: document.getElementById('map-container') });
  }, [map]);

return (
<div>
<div className="sidebar">
Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
</div>
<div ref={mapContainer} className="map-container" />
</div>
  );}

export default S4;



