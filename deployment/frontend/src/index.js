import React from 'react';
import ReactDOM from 'react-dom';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'leaflet/dist/leaflet.css';


import './index.css';
import App from './App';

import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render( <
    ContextProvider >
    <
    React.StrictMode >
    <
    App / >
    <
    /React.StrictMode>

    <
    /ContextProvider> ,
    document.getElementById('root'),
);