import Iframe from 'react-iframe';
import { ChartsHeader } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const S4 = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="MAP" title="Statistics on Places Visited and Posts Made by Twitter Users Who Have Posted from Melbourne" />
        <div>
        {currentMode === 'Light' ? (
           <Iframe url="/kepler/trail_light.html"width="100%" height="800px" />
        ) : (
          <Iframe url="/kepler/trail_dark.html"width="100%" height="800px" />
        )}
        </div>
    </div>
  );
};

export default S4; 