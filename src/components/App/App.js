import React, { useContext } from 'react';
import HeroWrapper from '../Hero/HeroWrapper';
import MonstersWrapper from '../Monsters/MonstersWrapper';

import MonstersProvider from '../../context/MonstersContext';
import { HeroContext } from '../../context/HeroContext';

import styles from './App.module.scss'

const App = () => {
  const { heroVisibility } = useContext(HeroContext);

  return (
    <div className={heroVisibility ? styles.app : styles.appCenter}>
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
