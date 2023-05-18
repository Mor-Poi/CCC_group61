import Iframe from 'react-iframe';
import { ChartsHeader } from '../components';


const S4 = () => {
  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar chart" title="Statistics on Places Visited and Posts Made by Twitter Users Who Have Posted from Melbourne" />
        <div>
          <Iframe url="/kepler/trail.html"width="100%" height="800px" />
        </div>
    </div>
  );
};

export default S4; 