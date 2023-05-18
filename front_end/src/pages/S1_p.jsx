import Iframe from 'react-iframe';
import { useStateContext } from '../contexts/ContextProvider';
import { ChartsHeader } from '../components';

const S1_p = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Bar chart" title="Distribution of Different Skin Tone Emojis Used in Each State of Australia" />


        <div>
          <Iframe url="/kepler/skin.html"width="100%" height="800px" />
        </div>
    </div>
  );
};

export default S1_p; 