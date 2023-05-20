import React from 'react';

const ChartsHeader = ({ category, title }) => (
  <div className=" mb-10">
   <p className="text-center dark:text-gray-200 text-xl mb-2 mt-3" style={{fontWeight: 'bold'}}>{title}</p>
  </div>
);

export default ChartsHeader;