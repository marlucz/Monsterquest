import React, { useState } from 'react';

import API from '../globals/API';

export const MonstersContext = React.createContext();

const MonstersProvider = ({ children }) => {
  const [monsterList, setMonsterList] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState({});
  const [isError, setError] = useState(false);

  const getMonsters = () => {
    API.fetchMonsters()
      .then(res => setMonsterList([...res.data]))
      .catch(err => setError(err));
  };

  const getMonster = monsterSlug => {
    if (
      selectedMonster.name &&
      monsterSlug === selectedMonster.name.toLowerCase()
    ) {
      return;
    } else {
      API.fetchMonster(monsterSlug)
        .then(res => setSelectedMonster(res.data))
        .catch(err => setError(err));
    }
  };

  return (
    <MonstersContext.Provider
      value={{
        monsterList,
        selectedMonster,
        isError,
        getMonsters,
        getMonster
      }}
    >
      {children}
    </MonstersContext.Provider>
  );
};

export default MonstersProvider;
