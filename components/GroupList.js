import GroupContainer from './GroupContainer';
import ListHeader from './ListHeader';
import React from 'react';

const GroupList = () => {
  return (
    <div className="listaGrupos">
      <ListHeader />
      <GroupContainer />
    </div>
  );
};

export default GroupList;
