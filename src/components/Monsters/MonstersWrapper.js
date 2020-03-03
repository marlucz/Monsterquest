import React, { useContext, useEffect } from 'react';
import MonsterList from './MonsterList';
import MonsterCard from './MonsterCard';
import MessageHandler from '../MessageHandler/MessageHandler';

import { MonstersContext } from '../../context/MonstersContext';

import './MonstersWrapper.scss';

const MonstersWrapper = () => {
  const {
    monsterList,
    selectedMonster,
    isError,
    getMonsters,
    getMonster
  } = useContext(MonstersContext);

  useEffect(() => {
    getMonsters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {isError ? (
        <MessageHandler>
          What you are looking for is either being downloaded from the server,
          trying to be displayed on the site ... or has been destroyed by our
          little monsters :(
        </MessageHandler>
      ) : (
        <section className="monsters-wrapper">
          <MonsterCard />
          <MonsterList
            monsters={monsterList}
            fetchMonster={getMonster}
            selected={selectedMonster}
          />
        </section>
      )}
    </>
  );
};

export default MonstersWrapper;
