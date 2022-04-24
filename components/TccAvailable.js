import {useState, useEffect} from 'react';
import React from 'react';

const TccAvailable = ({timestart, timeend}) => {
  const [availability, setAvailability] = useState('');

  useEffect(() => {
    getDate(timestart, timeend);
  });

  const getDate = (timestart, timeend) => {
    const now = new Date();
    const start = new Date(timestart.split('/').reverse().join('/'));
    const end = new Date(timeend.split('/').reverse().join('/'));
    if (start < now && now < end) {
      setAvailability('available');
    } else {
      setAvailability('unavailable');
    }
  };

  return (
    <div className={availability}>
      Tarefa está Disponível em {timestart} até {timeend}
    </div>
  );
};

export default TccAvailable;
