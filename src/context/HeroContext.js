import React, { useState } from 'react';

import { images } from '../globals/heroImages';

export const HeroContext = React.createContext();

const HeroProvider = ({ children }) => {
  const [heroVisibility, setHeroVisibility] = useState(true);

  const handleClickBtn = () => {
    setHeroVisibility(false);
  };

  return (
    <HeroContext.Provider
      value={{ images: images, heroVisibility, handleClickBtn }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
