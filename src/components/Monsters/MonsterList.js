import React, { useContext } from 'react';
import MessageHandler from '../MessageHandler/MessageHandler';

import { MonstersContext } from '../../context/MonstersContext';

import styles from './MonsterList.module.scss';

const MonsterList = () => {
  const { selectedMonster, getMonster, monsterList } = useContext(
    MonstersContext
  );

  return (
    <>
      {monsterList.length ? (
        <ul className={styles.wrapper}>
          {monsterList.map(monster => (
            <li
              key={monster.slug}
              className={
                selectedMonster.name === monster.name
                  ? styles.listItemActive
                  : styles.listItem
              }
              onClick={() => getMonster(monster.slug)}
            >
              <div className={styles.image}>
                <img src={monster.images.big} alt={monster.name} />
              </div>
              <h2 className={styles.name}>{monster.name}</h2>
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
