import Iframe from 'react-iframe';
import { ChartsHeader } from '../components';


const S2_1 = () => {
  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar chart" title="Trend Analysis of AFL's Topic Popularity Over Time" />
        <div>
          <Iframe url="/kepler/afltime.html"width="100%" height="800px" />
        </div>
    </div>
  );
};

export default S2_1; 