import Iframe from 'react-iframe';
import { useStateContext } from '../contexts/ContextProvider';

const S1_p = () => {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-18 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>Distribution of Different Skin Tone Emojis Used in Each State of Australia</h1>

        <div>
          <Iframe url="/kepler/skin.html"width="100%" height="800px" />
        </div>
    </div>
  );
};

export default S1_p; 