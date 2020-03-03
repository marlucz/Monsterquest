import React, { useContext } from 'react';
import HeroWrapper from '../Hero/HeroWrapper';
import MonstersWrapper from '../Monsters/MonstersWrapper';

import MonstersProvider from '../../context/MonstersContext';
import { HeroContext } from '../../context/HeroContext';

import './App.scss';

const App = () => {
  const { heroVisibility } = useContext(HeroContext);

  return (
    <div className={heroVisibility ? 'app' : 'app app--center-content'}>
      {heroVisibility ? (
        <HeroWrapper />
      ) : (
        <MonstersProvider>
          <MonstersWrapper />
        </MonstersProvider>
      )}
    </div>
  );
};

export default App;
