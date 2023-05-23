import React, { useEffect, useState } from 'react';
import { ChartsHeader, Pie as PieChart } from '../components';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../contexts/ContextProvider';
// import subjective from '../data/subjective.json';

const S1_1 = () => {
  const { currentMode } = useStateContext();

  const [barChartData, setBarChartData] = useState([]);

  const [sentiment, setSentiment] = useState([]);
  
  const [subjective, setSubjective] = useState([]);



  useEffect(() => {
    fetch('/api/subjective') 
      .then(response => response.json())
      .then(data => setSubjective(data))
      .catch(error => console.error(error));
  }, []);



  useEffect(() => {
    fetch('/api/sentiment') 
      .then(response => response.json())
      .then(data => setSentiment(data))
      .catch(error => console.error(error));
  }, []);




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
      <ChartsHeader category="Pie chart" title="Sentiment of the Top Five Most Common Emojis" />
      <div className="flex justify-between">

{sentiment.map((item,index) => {
  const chartId = `chart-pie-${index}`;
  const emoji = JSON.parse(`"${item.emoji}"`); 
  return  (<div style = { {flex: 1,width: '33.33%',padding: '0 10px',}} key={index}> 
      
  <PieChart id="chart-pie" id ={chartId} data={item.data}legendVisiblity height="full" />    <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <h3>{emoji}</h3>
        </div> 
 </div>);
}
)}</div>
      <ChartsHeader category="Pie chart" title="Subjective of the Top Five Most Common Emojis" />
      <div className="flex justify-between">

{subjective.map((item,index) => {
  const chartId = `chart-pie-${index}`;
  const emoji = JSON.parse(`"${item.emoji}"`); 
  return  (<div style = { {flex: 1,width: '33.33%',padding: '0 10px',}} key={index}> 
      
  <PieChart id="chart-pie" id ={chartId+5} data={item.data}legendVisiblity height="full" />    <div style={{ textAlign: 'center', marginTop: '10px' }}>
          <h3>{emoji}</h3>
        </div> 
 </div>);
}
)}</div>
    </div>
  );
};

export default S1_1;