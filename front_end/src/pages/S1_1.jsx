import React from 'react';
import { ChartsHeader, Pie as PieChart } from '../components';
import { pieChartData } from '../data/dummy';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../contexts/ContextProvider';

const S1_1 = () => {
  const { currentMode } = useStateContext();

  const barChartData = [
    {
      language: 'English',
      emojis: [
        { emoji: '😂', value: 70004 },
        { emoji: '👏', value: 26675 },
        { emoji: '🙏', value: 25273 },
        { emoji: '🔥', value: 23035 },
        { emoji: '😅', value: 23710 }
      ]
    },
    {
      language: 'Japanese',
      emojis: [
        { emoji: '😂', value: 4296 },
        { emoji: '😊', value: 3013 },
        { emoji: '😭', value: 2621 },
        { emoji: '😅', value: 2080 },
        { emoji: '😆', value: 1665 }
      ]
    },
    {
      language: 'Indonesian',
      emojis: [
        { emoji: '😂', value: 1753 },
        { emoji: '👏', value: 1464 },
        { emoji: '😭', value: 486 },
        { emoji: '🔥', value: 278 },
        { emoji: '💙', value: 249 }
      ]
    },
    {
      language: 'Spanish',
      emojis: [
        { emoji: '😂', value: 1729 },
        { emoji: '💜', value: 1289 },
        { emoji: '🐣', value: 1212 },
        { emoji: '😍', value: 560 },
        { emoji: '😉', value: 551 }
      ]
    },
    {
      language: 'Arabic',
      emojis: [
        { emoji: '😂', value: 3454 },
        { emoji: '🙏', value: 2875 },
        { emoji: '🌹', value: 2515 },
        { emoji: '😅', value: 1693 },
        { emoji: '👏', value: 1677 }
      ]
    }
  ];

  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className="flex justify-around flex-wrap">
        <div className="w-full md:full">
          <ChartsHeader category="Bar chart" title="Popularity of the most popular Emoji in different languages" />
          <ChartComponent
            id="charts"
            primaryXAxis={{ valueType: 'Category' }}
            primaryYAxis={{ title: 'Value' }}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background: 'white' }}
          >
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
            <SeriesCollectionDirective>
              {barChartData.map((data, index) => (
                <SeriesDirective
                  key={index}
                  dataSource={data.emojis}
                  xName="emoji"
                  yName="value"
                  name={data.language}
                  type="Column"
                />
              ))}
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default S1_1;