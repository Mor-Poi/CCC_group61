import Iframe from 'react-iframe';
import { ChartsHeader } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const S2_1 = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar chart" title="Trend Analysis of AFL's Topic Popularity Over Time" />
        <div>
        {currentMode === 'Light' ? (
           <Iframe url="/kepler/afltime_light.html"width="100%" height="800px" />
        ) : (
          <Iframe url="/kepler/afltime_dark.html"width="100%" height="800px" />
        )}
        </div>
    </div>
  );
};

export default S2_1; 