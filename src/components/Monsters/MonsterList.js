import React from 'react';
import MessageHandler from '../MessageHandler/MessageHandler';
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
