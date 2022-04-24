import GroupContainerDetails from './GroupContainerDetails';
import GroupContainerHeader from './GroupContainerHeader';
import React from 'react';

const GroupContainer = () => {
  return (
    <div className="groupContainer">
      <GroupContainerHeader />
      <GroupContainerDetails />
    </div>
  );
};

export default GroupContainer;
