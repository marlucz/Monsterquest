import React from 'react';
import MessageHandler from '../MessageHandler/MessageHandler';
import bgcImgs from '../../globals/pokebackgroundImages';
import './MonsterCard.scss';

const MonsterCard = ({
  monster: { name, description, statistics, images }
}) => {
  const powerBar = statistics ? statistics.power : '';
  const frequencyBar = statistics ? statistics.frequency : '';
  const dangerBar = statistics ? statistics.danger : '';
  // prevents stats to be displayed with decimal fractions
  const roundStat = stat => {
    return Math.floor(stat * 100);
  };
  const getRandomBgcUrl = array => {
    return array[Math.floor(Math.random() * array.length)];
  };

  return (
    <>
      {name ? (
        <div
          className="monster-card"
          style={{
            backgroundImage: `url(${getRandomBgcUrl(bgcImgs)})`,
            backgroundSize: 'cover'
          }}
        >
          <h2 className="monster-card__name">{name}</h2>
          <div className="monster-card__image">
            <img src={images.big} alt={name} />
          </div>
          <ul className="monster-card__stats-list">
            <li className="monster-card__stats">
              <label htmlFor="powerBar">Power: {roundStat(powerBar)}%</label>
              <progress
                id="powerBar"
                max={100}
                value={roundStat(powerBar)}
              ></progress>
            </li>
            <li className="monster-card__stats">
              <label htmlFor="frequencyBar">
                Frequency: {roundStat(frequencyBar)}%
              </label>
              <progress
                id="frequencyBar"
                max={100}
                value={roundStat(frequencyBar)}
              ></progress>
            </li>
            <li className="monster-card__stats">
              <label htmlFor="dangerBar">Danger: {roundStat(dangerBar)}%</label>
              <progress
                id="dangerBar"
                max={100}
                value={roundStat(dangerBar)}
              ></progress>
            </li>
          </ul>
          <p className="monster-card__description">{description}</p>
        </div>
      ) : (
        <>
          <MessageHandler
            image={true}
            src={'https://miro.medium.com/max/796/1*Jj7zXRWMuSW7P0ttFHJtZQ.gif'}
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
