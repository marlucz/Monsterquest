import React from 'react';
import './MonsterCard.scss';

const MonsterCard = ({
  monster: { name, description, statistics, images }
}) => (
  <>
    {name ? (
      <div className="monster-card">
        <h1>{name}</h1>
        <p>{description}</p>
        <img src={images.big} alt={name} />
      </div>
    ) : (
      <h1>No monster selected</h1>
    )}
  </>
);

export default MonsterCard;
