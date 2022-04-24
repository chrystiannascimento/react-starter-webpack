import GroupList from './GroupList';
import TccAvailable from './TccAvailable';
import React from 'react';

const TccContent = () => {
  return (
    <div className="tcc-content">
      <TccAvailable timestart="25/04/2022" timeend={"30/04/2022"} />
      <GroupList />
    </div>
  );
};

export default TccContent;
