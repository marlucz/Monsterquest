import React from 'react';
import './MonsterList.scss';

const MonsterList = ({ selected, fetchMonster, monsters }) => {
  return (
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
        <h2 style={{ textAlign: 'center' }}>
          What you are looking for is either downloaded by the server, trying to
          be displayed on the site ... or has been destroyed by our little
          monsters :(
        </h2>
      )}
    </>
  );
};

export default MonsterList;
