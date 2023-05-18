import Iframe from 'react-iframe';
import { useStateContext } from '../contexts/ContextProvider';

const S4 = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Statistics on Places Visited and Posts Made by Twitter Users Who Have Posted from Melbourne</h1>

        <div>
          <Iframe url="/kepler/trail.html"width="100%" height="800px" />
        </div>
    </div>
  );
};

export default S4; 