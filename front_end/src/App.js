import React, { useRef, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings, UserProfile } from './components';
import { S1, S1_1, S2, S3, S4, Sum } from './pages';
import './App.css';
import { useStateContext } from './contexts/ContextProvider';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken = 'pk.eyJ1Ijoic2x5dGhlcmlubyIsImEiOiJjbGhpdXRjYmMwYm9tM2ZscmtmdGx3ZDJ5In0.w4ueS0LNoS1jaXZsTgE00A';

const App = () => {

    const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor, themeSettings, setThemeSettings } = useStateContext();

    useEffect(() => {
        const currentThemeColor = localStorage.getItem('colorMode');
        const currentThemeMode = localStorage.getItem('themeMode');
        if (currentThemeColor && currentThemeMode) {
            setCurrentColor(currentThemeColor);
            setCurrentMode(currentThemeMode);
        }
    }, []);
    return ( <
        div className = { currentMode === 'Dark' ? 'dark' : '' } >
        <
        BrowserRouter >
        <
        div className = "flex relative dark:bg-main-dark-bg" >
        <
        div className = "fixed right-4 bottom-4"
        style = {
            { zIndex: '1000' }
        } >
        <
        TooltipComponent content = "Settings"
        position = "Top" >
        <
        button type = "button"
        onClick = {
            () => setThemeSettings(true)
        }
        style = {
            { background: currentColor, borderRadius: '50%' }
        }
        className = "text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray" >
        <
        FiSettings / >
        <
        /button>

        <
        /TooltipComponent> < /
        div > {
            activeMenu ? ( <
                div className = "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white " >
                <
                Sidebar / >
                <
                /div>
            ) : ( <
                div className = "w-0 dark:bg-secondary-dark-bg" >
                <
                Sidebar / >
                <
                /div>
            )
        } <
        div className = {
            activeMenu ?
            'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  ' : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
        } >
        <
        div className = "fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full " >
        <
        Navbar / >
        <
        /div> <
        div > { themeSettings && ( < ThemeSettings / > ) } <
        Routes > { /* dashboard  */ } <
        Route path = '/'
        element = { < S1 / > }
        / > <
        Route path = '/Scenario1'
        element = { < S1 / > }
        / > <
        Route path = '/Scenario1_1'
        element = { < S1_1 / > }
        / ><
        Route path = '/Scenario2'
        element = { < S2 / > }
        / > <
        Route path = '/Scenario3'
        element = { < S3 / > }
        / > <
        Route path = '/Scenario4'
        element = { < S4 / > }
        / > < /
        Routes > < /
        div >
        <
        /div>  < /
        div >
        <
        /BrowserRouter >  < /
        div >

    )
}

export default App