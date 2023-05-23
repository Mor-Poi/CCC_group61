import React, { useState, useEffect } from 'react';
import { ChartsHeader } from '../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../contexts/ContextProvider';


const S2 = () => {
  const { currentMode } = useStateContext();
  const [barChartData, setBarChartData] = useState([]);

  useEffect(() => {
    fetch('/api/AFL') 
      .then(response => response.json())
      .then(data => setBarChartData(data))
      .catch(error => console.error(error));
  }, []);


  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <div className="flex justify-around flex-wrap">
        <div className="w-full md:full">
          <ChartsHeader category="Bar chart" title="Average AFL Scores by Team" />
          <ChartComponent
            id="charts"
            primaryXAxis={{ valueType: 'Category' }}
            primaryYAxis={{ title: 'Average Score' }}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            legendSettings={{ background: 'white' }}
          >
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
            <SeriesCollectionDirective>
              <SeriesDirective
                dataSource={barChartData}
                xName="team"
                yName="avg"
                name="Average Score"
                type="Column"
                marker={{
                  visible: true,
                  width: 10,
                  height: 10,
                  shape: 'Circle',
                }}
                markerDataLabel={{ visible: true }}
                fill={(point) => {
                  const categoryColors = ['#FF4081', '#536DFE', '#00BDAF']; 
                  return categoryColors[point.category % categoryColors.length];
                }}
              />
            </SeriesCollectionDirective>
          </ChartComponent>
        </div>
      </div>
    </div>
  );
};

export default S2;