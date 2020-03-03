import React, { useState } from 'react';

import { images } from '../globals/heroImages';

export const HeroContext = React.createContext();

const HeroProvider = ({ children }) => {
  const [heroVisibility, setHeroVisibility] = useState(true);

  const handleHeroFadeOut = () => {
    setHeroVisibility(false);
  };

  return (
    <HeroContext.Provider
      value={{ images: images, heroVisibility, handleHeroFadeOut }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
