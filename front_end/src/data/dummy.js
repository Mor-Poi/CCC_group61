import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
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

export const links = [{
        title: 'Dashboard',
        links: [{
            name: 'Timeline',
            icon: < AiOutlineBarChart / > ,
        }, ],
    },

    {
        title: 'Scenarios',
        links: [{
                name: 'Scenario1',
                icon: < AiOutlineStock / > ,

            },
            {
                name: 'Scenario2',
                icon: < AiOutlineAreaChart / > ,
            },
            {
                name: 'Scenario3',
                icon: < AiOutlineBarChart / > ,
            },
            {
                name: 'Scenario4',
                icon: < RiStockLine / > ,
            },
        ],
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