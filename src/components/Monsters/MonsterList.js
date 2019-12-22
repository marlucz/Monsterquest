import React from 'react';
import './MonsterList.scss';

const MonsterList = ({ selected, fetchMonster, monsters }) => (
  <>
    {monsters.length ? (
      <ul className="monsters-list">
        {monsters.map(monster => (
          <li
            key={monster.slug}
            className={
              selected.name === monster.name
                ? 'monsters-list__item monsters-list__item--active'
                : 'monsters-list__item'
            }
            onClick={() => fetchMonster(monster.slug)}
          >
            <img
              className="monsters-list__item__image"
              src={monster.images.thumb}
              alt={monster.name}
            />
            <h2 className="monsters-list__item__name">{monster.name}</h2>
          </li>
        ))}
      </ul>
    ) : (
      <>
        <h1 className="monsters__spinner">
          One of our little monsters must have broken something. Please wait a
          second for a response or try again later.
        </h1>
        <img
          src="https://miro.medium.com/max/796/1*Jj7zXRWMuSW7P0ttFHJtZQ.gif"
          alt="loading data"
        />
      </>
    )}
  </>
);

export default MonsterList;
