import React from 'react';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { HiOutlineEmojiHappy } from 'react-icons/hi';
import { FiMapPin } from 'react-icons/fi';
import { BiFootball, BiTimeFive, BiBus } from 'react-icons/bi';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoFastFood } from "react-icons/io5";

import avatar from './avatar.JPG';


export const links = [

    {
        title: 'Scenario1',
        links: [{
                name: 'Scenario1',
                icon: < FiMapPin / > ,

            },
            {
                name: 'Scenario1.1',
                icon: < HiOutlineEmojiHappy / > ,

            },
            {
                name: 'Scenario1.2',
                icon: < BsEmojiSunglasses / > ,

            },
        ],
    },
    {
        title: 'Scenario2',
        links: [{
                name: 'Scenario2',
                icon: < BiFootball / > ,

            },
            {
                name: 'Scenario2.1',
                icon: < BiTimeFive / > ,

            },
        ],
    },
    {
        title: 'Scenario3',
        links: [{
            name: 'Scenario3',
            icon: < AiOutlineTeam / > ,

        }, ],
    },
    {
        title: 'Scenario4',
        links: [{
            name: 'Scenario4',
            icon: < BiBus / > ,

        }, ],
    },

];



export const themeColors = [{
        name: 'blue-theme',
        color: '#1A97F5',
    },
    {
        name: 'green-theme',
        color: '#03C9D7',
    },
    {
        name: 'purple-theme',
        color: '#7352FF',
    },
    {
        name: 'red-theme',
        color: '#FF5C8E',
    },
    {
        name: 'indigo-theme',
        color: '#189399',
    },
    {
        color: '#FB9678',
        name: 'orange-theme',
    },
];


export const barPrimaryXAxis = {
    valueType: 'Category',
    interval: 1,
    majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
    majorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    lineStyle: { width: 0 },
    labelStyle: { color: 'transparent' },
};

export const barChartData = [
    [
        { x: 'avg', y: 634, name: "CAT" },
        { x: 'sum', y: 381, name: "DOG" },

    ],
    [
        { x: 'avg', y: 294, name: "CAT" },
        { x: 'sum', y: 301, name: "DOG" },

    ],
]

export const barCustomSeries = [{
        dataSource: barChartData[0],
        xName: 'x',
        yName: 'y',
        name: 'CAT',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        },
    },
    {
        dataSource: barChartData[1],
        xName: 'x',
        yName: 'y',
        name: 'DOG',
        type: 'Column',
        marker: {
            dataLabel: {
                visible: true,
                position: 'Top',
                font: { fontWeight: '600', color: '#ffffff' },
            },
        },
    },

];
export const colorMappingData = [
    [
        { x: 'Jan', y: 6.96 },
        { x: 'Feb', y: 8.9 },
        { x: 'Mar', y: 12 },
        { x: 'Apr', y: 17.5 },
        { x: 'May', y: 22.1 },
        { x: 'June', y: 25 },
        { x: 'July', y: 29.4 },
        { x: 'Aug', y: 29.6 },
        { x: 'Sep', y: 25.8 },
        { x: 'Oct', y: 21.1 },
        { x: 'Nov', y: 15.5 },
        { x: 'Dec', y: 9.9 },
    ],
    ['#FFFF99'],
    ['#FFA500'],
    ['#FF4040'],
];

export const pieChartData = [
    { x: 'CAT', y: 6015, text: '37%' },
    { x: 'DOG', y: 10230, text: '63%' },
];

export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'hours',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
};

export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
};

export const lineChartData = [
    [
        { x: 0, y: 674 },
        { x: 1, y: 655 },
        { x: 2, y: 613 },
        { x: 3, y: 611 },
        { x: 4, y: 652 },
        { x: 5, y: 634 },
        { x: 6, y: 630 },
    ],
];

export const lineCustomSeries = [{
    dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'sentiment',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line'
}, ];

const areaChartData = [

    [
        { x: new Date('December 17, 2021 00:00:00'), y: 0.067 },
        { x: new Date('December 17, 2021 01:00:00'), y: 0.066 },
        { x: new Date('December 17, 2021 02:00:00'), y: 0.061 },
        { x: new Date('December 17, 2021 03:00:00'), y: 0.061 },
        { x: new Date('December 17, 2021 04:00:00'), y: 0.065 },
        { x: new Date('December 17, 2021 05:00:00'), y: 0.063 },
        { x: new Date('December 17, 2021 06:00:00'), y: 0.063 },
        { x: new Date('December 17, 2021 07:00:00'), y: 0.065 },
        { x: new Date('December 17, 2021 08:00:00'), y: 0.066 },
        { x: new Date('December 17, 2021 09:00:00'), y: 0.067 },
        { x: new Date('December 17, 2021 10:00:00'), y: 0.065 },
        { x: new Date('December 17, 2021 11:00:00'), y: 0.065 },
        { x: new Date('December 17, 2021 12:00:00'), y: 0.064 },
        { x: new Date('December 17, 2021 13:00:00'), y: 0.060 },
        { x: new Date('December 17, 2021 14:00:00'), y: 0.058 },
        { x: new Date('December 17, 2021 15:00:00'), y: 0.057 },
        { x: new Date('December 17, 2021 16:00:00'), y: 0.055 },
        { x: new Date('December 17, 2021 17:00:00'), y: 0.056 },
        { x: new Date('December 17, 2021 18:00:00'), y: 0.071 },
        { x: new Date('December 17, 2021 19:00:00'), y: 0.076 },
        { x: new Date('December 17, 2021 20:00:00'), y: 0.076 },
        { x: new Date('December 17, 2021 21:00:00'), y: 0.076 },
        { x: new Date('December 17, 2021 22:00:00'), y: 0.071 },
        { x: new Date('December 17, 2021 23:00:00'), y: 0.069 },

    ],
    [
        { x: new Date('December 17, 2021 00:00:00'), y: 0.01659485139763562 },
        { x: new Date('December 17, 2021 01:00:00'), y: 0.014625627592228772 },
        { x: new Date('December 17, 2021 02:00:00'), y: 0.015158829776962441 },
        { x: new Date('December 17, 2021 03:00:00'), y: 0.013099234960647256 },
        { x: new Date('December 17, 2021 04:00:00'), y: 0.012954106356697179 },
        { x: new Date('December 17, 2021 05:00:00'), y: 0.015417282127031019 },
        { x: new Date('December 17, 2021 06:00:00'), y: 0.017957766520576013 },
        { x: new Date('December 17, 2021 07:00:00'), y: 0.022386831275720165 },
        { x: new Date('December 17, 2021 08:00:00'), y: 0.02200939552025747 },
        { x: new Date('December 17, 2021 09:00:00'), y: 0.02294526988903517 },
        { x: new Date('December 17, 2021 10:00:00'), y: 0.02458119574995745 },
        { x: new Date('December 17, 2021 11:00:00'), y: 0.024107106742709217 },
        { x: new Date('December 17, 2021 12:00:00'), y: 0.029938310014400255 },
        { x: new Date('December 17, 2021 13:00:00'), y: 0.030105519847063958 },
        { x: new Date('December 17, 2021 14:00:00'), y: 0.02680675848360074 },
        { x: new Date('December 17, 2021 15:00:00'), y: 0.02673765926438971 },
        { x: new Date('December 17, 2021 16:00:00'), y: 0.025644730188542946 },
        { x: new Date('December 17, 2021 17:00:00'), y: 0.02665848742441504 },
        { x: new Date('December 17, 2021 18:00:00'), y: 0.025135713110708998 },
        { x: new Date('December 17, 2021 19:00:00'), y: 0.024383457325288502 },
        { x: new Date('December 17, 2021 20:00:00'), y: 0.023400824736384003 },
        { x: new Date('December 17, 2021 21:00:00'), y: 0.02297831034944437 },
        { x: new Date('December 17, 2021 22:00:00'), y: 0.0187079220701845 },
        { x: new Date('December 17, 2021 23:00:00'), y: 0.017236813065548445 },
    ],



];

export const areaCustomSeries = [{
        dataSource: areaChartData[0],
        xName: 'x',
        yName: 'y',
        name: "Twitter user's sentiment",
        opacity: '0.8',
        type: 'SplineArea',
        width: '2',

    },
    {
        dataSource: areaChartData[1],
        xName: 'x',
        yName: 'y',
        name: "Mastodon user's sentiment",
        opacity: '0.8',
        type: 'SplineArea',
        width: '2',
    },
];


export const areaPrimaryXAxis = {
    valueType: 'DateTime',
    majorGridLines: { width: 0 },
    intervalType: 'Hours',
    edgeLabelPlacement: 'Shift',
    labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
    labelFormat: '{value}',
    lineStyle: { width: 0 },
    minimum: 0.01,
    maximum: 0.08,
    interval: 0.01,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelStyle: { color: 'gray' },

};

const areaChartData1 = [

    [
        { x: 'Monday', y: 0.0646779171390525 },
        { x: 'Tuesday', y: 0.06666706944881394 },
        { x: 'Wednesday', y: 0.06456042458628372 },
        { x: 'Thursday', y: 0.06462759237534485 },
        { x: 'Friday', y: 0.06663248784343506 },
        { x: 'Saturday ', y: 0.06664027096149207 },
        { x: 'Sunday', y: 0.06543609446751482 },
    ],
    [
        { x: 'Monday', y: 0.054054634543108805 },
        { x: 'Tuesday', y: 0.04870082330631268 },
        { x: 'Wednesday', y: 0.044998296716546725 },
        { x: 'Thursday', y: 0.044433603433927556 },
        { x: 'Friday', y: 0.05498947795509876 },
        { x: 'Saturday ', y: 0.06626903712939225 },
        { x: 'Sunday', y: 0.06083403626846139 },
    ],
];

export const areaCustomSeries1 = [{
        dataSource: areaChartData1[0],
        xName: 'x',
        yName: 'y',
        name: "Twitter user's sentiment",
        opacity: 0.8,
        type: 'SplineArea',
        width: 2,
    },
    {
        dataSource: areaChartData1[1],
        xName: 'x',
        yName: 'y',
        name: "Mastodon user's sentiment",
        opacity: 0.8,
        type: 'SplineArea',
        width: 2,
    },
];
export const areaPrimaryXAxis1 = {
    valueType: 'Category',
    majorGridLines: { width: 0 },
    edgeLabelPlacement: 'Shift',
    labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis1 = {
    labelFormat: '{value}',
    lineStyle: { width: 0 },
    minimum: 0.04,
    maximum: 0.08,
    interval: 0.005,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelStyle: { color: 'gray' },
};

export const areaChartData2 = [

    [
        { x: new Date('December 17, 2021 00:00:00'), y: 0.01659485139763562 },
        { x: new Date('December 17, 2021 01:00:00'), y: 0.014625627592228772 },
        { x: new Date('December 17, 2021 02:00:00'), y: 0.015158829776962441 },
        { x: new Date('December 17, 2021 03:00:00'), y: 0.013099234960647256 },
        { x: new Date('December 17, 2021 04:00:00'), y: 0.012954106356697179 },
        { x: new Date('December 17, 2021 05:00:00'), y: 0.015417282127031019 },
        { x: new Date('December 17, 2021 06:00:00'), y: 0.017957766520576013 },
        { x: new Date('December 17, 2021 07:00:00'), y: 0.022386831275720165 },
        { x: new Date('December 17, 2021 08:00:00'), y: 0.02200939552025747 },
        { x: new Date('December 17, 2021 09:00:00'), y: 0.02294526988903517 },
        { x: new Date('December 17, 2021 10:00:00'), y: 0.02458119574995745 },
        { x: new Date('December 17, 2021 11:00:00'), y: 0.024107106742709217 },
        { x: new Date('December 17, 2021 12:00:00'), y: 0.029938310014400255 },
        { x: new Date('December 17, 2021 13:00:00'), y: 0.030105519847063958 },
        { x: new Date('December 17, 2021 14:00:00'), y: 0.02680675848360074 },
        { x: new Date('December 17, 2021 15:00:00'), y: 0.02673765926438971 },
        { x: new Date('December 17, 2021 16:00:00'), y: 0.025644730188542946 },
        { x: new Date('December 17, 2021 17:00:00'), y: 0.02665848742441504 },
        { x: new Date('December 17, 2021 18:00:00'), y: 0.025135713110708998 },
        { x: new Date('December 17, 2021 19:00:00'), y: 0.024383457325288502 },
        { x: new Date('December 17, 2021 20:00:00'), y: 0.023400824736384003 },
        { x: new Date('December 17, 2021 21:00:00'), y: 0.02297831034944437 },
        { x: new Date('December 17, 2021 22:00:00'), y: 0.0187079220701845 },
        { x: new Date('December 17, 2021 23:00:00'), y: 0.017236813065548445 },

    ],
    [
        { x: new Date('December 17, 2021 00:00:00'), y: 0.017912386177912677 },
        { x: new Date('December 17, 2021 01:00:00'), y: 0.017801581229278246 },
        { x: new Date('December 17, 2021 02:00:00'), y: 0.01730855578569256 },
        { x: new Date('December 17, 2021 03:00:00'), y: 0.019026400802049682 },
        { x: new Date('December 17, 2021 04:00:00'), y: 0.016354031084909272 },
        { x: new Date('December 17, 2021 05:00:00'), y: 0.016729509373512367 },
        { x: new Date('December 17, 2021 06:00:00'), y: 0.017282816144765675 },
        { x: new Date('December 17, 2021 07:00:00'), y: 0.01955028435583225 },
        { x: new Date('December 17, 2021 08:00:00'), y: 0.017846409339620888 },
        { x: new Date('December 17, 2021 09:00:00'), y: 0.018175544886227406 },
        { x: new Date('December 17, 2021 10:00:00'), y: 0.017864348547909196 },
        { x: new Date('December 17, 2021 11:00:00'), y: 0.018026284996366413 },
        { x: new Date('December 17, 2021 12:00:00'), y: 0.016743803039198493 },
        { x: new Date('December 17, 2021 13:00:00'), y: 0.017047338978928517 },
        { x: new Date('December 17, 2021 14:00:00'), y: 0.017906158168372783 },
        { x: new Date('December 17, 2021 15:00:00'), y: 0.017187389635768605 },
        { x: new Date('December 17, 2021 16:00:00'), y: 0.020686459471088603 },
        { x: new Date('December 17, 2021 17:00:00'), y: 0.016418654917283233 },
        { x: new Date('December 17, 2021 18:00:00'), y: 0.0161376878258203 },
        { x: new Date('December 17, 2021 19:00:00'), y: 0.015327577197740675 },
        { x: new Date('December 17, 2021 20:00:00'), y: 0.018507228115812433 },
        { x: new Date('December 17, 2021 21:00:00'), y: 0.018229538637337523 },
        { x: new Date('December 17, 2021 22:00:00'), y: 0.016473879354366023 },
        { x: new Date('December 17, 2021 23:00:00'), y: 0.017470953025874973 },
    ],



];

export const areaCustomSeries2 = [{
        dataSource: areaChartData2[0],
        xName: 'x',
        yName: 'y',
        name: "Mastodon user's sentiment",
        opacity: '0.8',
        type: 'SplineArea',
        width: '2',

    },
    {
        dataSource: areaChartData2[1],
        xName: 'x',
        yName: 'y',
        name: "Twitter user's sentiment",
        opacity: '0.8',
        type: 'SplineArea',
        width: '2',
    },
];


export const areaPrimaryXAxis2 = {
    valueType: 'DateTime',
    majorGridLines: { width: 0 },
    intervalType: 'Hours',
    edgeLabelPlacement: 'Shift',
    labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis2 = {
    labelFormat: '{value}',
    lineStyle: { width: 0 },
    minimum: 0.00,
    maximum: 0.04,
    interval: 0.01,
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    labelStyle: { color: 'gray' },

};