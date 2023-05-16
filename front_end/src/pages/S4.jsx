import React from 'react';
import Iframe from 'react-iframe';

const S4 = () => {
  return (
    <div>
      {/* 其他组件内容 */}
      <Iframe url="/kepler/kepler.gl.html"width="100%" height="800px" />
    </div>
  );
};

export default S4;