import React, { useContext } from 'react';
import MessageHandler from '../MessageHandler/MessageHandler';
import './MonsterList.scss';

import { MonstersContext } from '../../context/MonstersContext';

const MonsterList = () => {
  const { selectedMonster, getMonster, monsterList } = useContext(
    MonstersContext
  );

  return (
    <>
      {monsterList.length ? (
        <ul className="monsters-list">
          {monsterList.map(monster => (
            <li
              key={monster.slug}
              className={
                selectedMonster.name === monster.name
                  ? 'monsters-list__item monsters-list__item--active'
                  : 'monsters-list__item'
              }
              onClick={() => getMonster(monster.slug)}
            >
              <div className="monsters-list__item__image">
                <img src={monster.images.big} alt={monster.name} />
              </div>
              <h2 className="monsters-list__item__name">{monster.name}</h2>
            </li>
          ))}
        </ul>
      ) : (
        <MessageHandler>
          What you are looking for is either being downloaded from the server,
          trying to be displayed on the site ... or has been destroyed by our
          little monsters :(
        </MessageHandler>
      )}
    </>
  );
};

export default MonsterList;
