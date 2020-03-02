import React, { useState } from 'react';
import HeroWrapper from '../Hero/HeroWrapper';
import MonstersWrapper from '../Monsters/MonstersWrapper';
import { images } from '../../data/heroImages';
import './App.scss';

const App = () => {
  const [heroVisibility, setHeroVisibility] = useState(true);

  const handleClickBtn = () => {
    setHeroVisibility(false);
  };

  return (
    <div className={heroVisibility ? 'app' : 'app app--center-content'}>
      {heroVisibility ? (
        <HeroWrapper images={images} clickBtn={handleClickBtn} />
      ) : (
        <MonstersWrapper />
      )}
    </div>
  );
};

export default App;
