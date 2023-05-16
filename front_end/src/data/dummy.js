import React from 'react';
import { AiOutlineCalendar, AiOutlineStock } from 'react-icons/ai';
import { BsEmojiSunglasses } from 'react-icons/bs';
import { FiMapPin } from 'react-icons/fi';
import { BiFootball } from 'react-icons/bi';
import { VscOctoface } from 'react-icons/vsc';
import { IoFastFood } from "react-icons/io5";
import { FiShoppingBag, FiEdit, FiPieChart, FiBarChart, FiCreditCard, FiStar, FiShoppingCart } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsBoxSeam, BsCurrencyDollar, BsShield, BsChatLeft } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { HiOutlineRefresh } from 'react-icons/hi';
import { TiTick } from 'react-icons/ti';
import { GiLouvrePyramid } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import avatar from './avatar.JPG';
import avatar2 from './avatar2.JPG';
import avatar3 from './avatar3.JPG';
import avatar4 from './avatar4.JPG';
import avatar5 from './avatar5.JPG';

export const links = [

    {
        title: 'Scenario1',
        links: [{
                name: 'Scenario1',
                icon: < FiMapPin / > ,

            },
            {
                name: 'Scenario1_p',
                icon: < FiMapPin / > ,

            },
            {
                name: 'Scenario1_1',
                icon: < BsEmojiSunglasses / > ,

            },
        ],
    },
    {
        title: 'Scenario2',
        links: [{
            name: 'Scenario2',
            icon: < BiFootball / > ,

        }, ],
    },
    {
        title: 'Scenario3',
        links: [{
            name: 'Scenario3',
            icon: < VscOctoface / > ,

        }, ],
    },
    {
        title: 'Scenario4',
        links: [{
            name: 'Scenario4',
            icon: < IoFastFood / > ,

        }, ],
    },

];

export const scheduleData = [{
        Id: 1,
        Subject: 'meeting1',
        Location: 'erc',
        StartTime: '2023-04-10T04:00:00.000Z',
        EndTime: '2023-04-10T05:30:00.000Z',
        CategoryColor: '#1aaa55',
    },
    {
        Id: 2,
        Subject: 'meeting2',
        Location: 'erc',
        StartTime: '2023-04-11T06:30:00.000Z',
        EndTime: '2023-04-11T08:30:00.000Z',
        CategoryColor: '#357cd2',
    },
    {
        Id: 3,
        Subject: 'meeting3',
        Location: 'erc',
        StartTime: '2023-04-12T04:00:00.000Z',
        EndTime: '2023-04-12T05:30:00.000Z',
        CategoryColor: '#7fa900',
    },
    {
        Id: 4,
        Subject: 'meeting4',
        Location: 'erc',
        StartTime: '2023-04-13T07:30:00.000Z',
        EndTime: '2023-04-13T09:00:00.000Z',
        CategoryColor: '#ea7a57',
    },
    {
        Id: 5,
        Subject: 'meeting5',
        Location: 'erc',
        StartTime: '2023-04-14T06:30:00.000Z',
        EndTime: '2023-04-14T08:30:00.000Z',
        CategoryColor: '#00bdae',
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
        color: '#1E4DB7',
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