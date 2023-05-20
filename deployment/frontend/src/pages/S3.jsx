import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Category,DateTime, SplineAreaSeries, Legend} from '@syncfusion/ej2-react-charts';
import { ChartsHeader } from '../components';
import { areaCustomSeries, areaPrimaryXAxis, areaPrimaryYAxis, areaPrimaryXAxis1, areaPrimaryYAxis1, areaCustomSeries1,areaCustomSeries2, areaPrimaryXAxis2, areaPrimaryYAxis2} from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const S3 = () => {
  const { currentMode } = useStateContext();

  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Area" title="Changes of 24 hours sentiment" />
      <div style={{ height: '500px' }} className="w-full">
        <ChartComponent
          id="charts1"
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent></div>
        <ChartsHeader category="Area" title="Changes of weekly sentiment" />
      <div style={{ height: '500px' }} className="w-full">
        <ChartComponent
          id="charts2"
          primaryXAxis={areaPrimaryXAxis1}
          primaryYAxis={areaPrimaryYAxis1}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, Category, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries1.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent> </div>     
        <ChartsHeader category="Area" title="Changes of 24 hours response" />
      <div style={{ height: '500px' }} className="w-full">
        <ChartComponent
          id="charts3"
          primaryXAxis={areaPrimaryXAxis2}
          primaryYAxis={areaPrimaryYAxis2}
          chartArea={{ border: { width: 0 } }}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          legendSettings={{ background: 'white' }}
        >
          <Inject services={[SplineAreaSeries, DateTime, Legend]} />
          <SeriesCollectionDirective>
            {areaCustomSeries2.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent></div>

      </div>


  );
};
export default S3;