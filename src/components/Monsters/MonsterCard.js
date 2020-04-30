import React, { useContext } from 'react';
import MessageHandler from '../MessageHandler/MessageHandler';
import bgcImgs from '../../globals/pokebackgroundImages';

import { MonstersContext } from '../../context/MonstersContext';

import styles from './MonsterCard.module.scss';

const MonsterCard = () => {
  const {
    selectedMonster: { name, description, statistics, images }
  } = useContext(MonstersContext);

  // prevents stats to be displayed with decimal fractions
  const roundStat = stat => {
    return Math.floor(stat * 100);
  };
  const getRandomBgcUrl = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const powerBar = statistics ? roundStat(statistics.power) : '';
  const frequencyBar = statistics ? roundStat(statistics.frequency) : '';
  const dangerBar = statistics ? roundStat(statistics.danger) : '';

  const loadingMonsterUrl =
    'https://miro.medium.com/max/796/1*Jj7zXRWMuSW7P0ttFHJtZQ.gif';

  return (
    <>
      {name ? (
        <div
          className={styles.wrapper}
          style={{
            backgroundImage: `url(${getRandomBgcUrl(bgcImgs)})`,
            backgroundSize: 'cover'
          }}
        >
          <h2 className={styles.name}>{name}</h2>
          <div className={styles.image}>
            <img src={images.big} alt={name} />
          </div>
          <ul className={styles.stats}>
            <li className={styles.statsItem}>
              <label htmlFor="powerBar">Power: {powerBar}%</label>
              <progress id="powerBar" max={100} value={powerBar}></progress>
            </li>
            <li className={styles.statsItem}>
              <label htmlFor="frequencyBar">Frequency: {frequencyBar}%</label>
              <progress
                id="frequencyBar"
                max={100}
                value={frequencyBar}
              ></progress>
            </li>
            <li className={styles.statsItem}>
              <label htmlFor="dangerBar">Danger: {dangerBar}%</label>
              <progress id="dangerBar" max={100} value={dangerBar}></progress>
            </li>
          </ul>
          <p className={styles.description}>{description}</p>
        </div>
      ) : (
        <>
          <MessageHandler
            image={true}
            src={loadingMonsterUrl}
            alt={'monster gif'}
          >
            No Monster Selected
          </MessageHandler>
        </>
      )}
    </>
  );
};

export default MonsterCard;
