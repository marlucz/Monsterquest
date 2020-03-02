import React, { useState, useEffect } from 'react';
import MonsterList from './MonsterList';
import MonsterCard from './MonsterCard';
import MessageHandler from '../MessageHandler/MessageHandler';
import API from '../API';
import './MonstersWrapper.scss';

const MonstersWrapper = () => {
  const [monsterList, setMonsterList] = useState([]);
  const [selectedMonster, setSelectedMonster] = useState({});
  const [isError, setError] = useState(false);

  useEffect(() => {
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
  }, []);

  const getMonster = monsterSlug => {
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
  };

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
          <MonsterCard monster={selectedMonster} />
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
