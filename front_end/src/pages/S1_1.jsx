import React, { useEffect, useState } from 'react';
import { ChartsHeader } from '../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../contexts/ContextProvider';
// import barChartData from '../data/barChartData.json';

const S1_1 = () => {
  const { currentMode } = useStateContext();

  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    fetch('/api/barChartData') 
      .then(response => response.json())
      .then(data => setBarChartData(data))
      .catch(error => console.error(error));
  }, []);


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