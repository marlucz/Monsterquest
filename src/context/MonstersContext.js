import React, { useState } from 'react';

import API from '../globals/API';

export const MonstersContext = React.createContext();

const MonstersProvider = ({ children }) => {
  const [monsterList, setMonsterList] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState({});
  const [isError, setError] = useState(false);

  const getMonsters = () => {
    API.fetchMonsters().then(res => {
      try {
        if (!(res instanceof Error)) {
          setMonsterList([...res]);
        } else {
          throw Error(res.message);
        }
      } catch (err) {
        setError(true);
      }
    });
  };

  const getMonster = monsterSlug => {
    if (
      selectedMonster.name &&
      monsterSlug === selectedMonster.name.toLowerCase()
    ) {
      console.log('memoized');
      return;
    } else {
      console.log(monsterSlug, selectedMonster.name);
      API.fetchMonster(monsterSlug).then(res => {
        try {
          if (!(res instanceof Error)) {
            setSelectedMonster(res);
          } else {
            throw Error(res.message);
          }
        } catch (err) {
          setError(true);
        }
      });
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
