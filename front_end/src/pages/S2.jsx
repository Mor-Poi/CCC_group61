import React from 'react';

import { pieChartData } from '../data/dummy';
import { ChartsHeader, Pie as PieChart } from '../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const S2 = () => {
  
  const { currentMode } = useStateContext();
  
    return (
      <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
        <div className="flex justify-around flex-wrap"> 
          <div className="w-full md:w-1/2">
            <ChartsHeader category="Pie" title="CAT or DOG?" />
            <PieChart id="chart-pie" data={pieChartData} legendVisiblity height="full" />
          </div>
          <div className="w-full md:w-1/2">
            <ChartsHeader category="Bar chart" title="CAT or DOG?" />
            <ChartComponent
              id="charts"
              primaryXAxis={barPrimaryXAxis}
              primaryYAxis={barPrimaryYAxis}
              chartArea={{ border: { width: 0 } }}
              tooltip={{ enable: true }}
              background={currentMode === 'Dark' ? '#33373E' : '#fff'}
              legendSettings={{ background: 'white' }}
            >
              <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
              <SeriesCollectionDirective>
                {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
              </SeriesCollectionDirective>
            </ChartComponent>
          </div>
        </div>
      </div>
    );
  };

export default S2;