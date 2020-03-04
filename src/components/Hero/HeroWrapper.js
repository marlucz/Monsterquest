import React, { useState, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import HeroImage from './HeroImage';
import { HeroContext } from '../../context/HeroContext';

import styles from './HeroWrapper.module.scss'

const HeroWrapper = () => {
  const [showHero, setShowHero] = useState(true);

  const {
    handleHeroFadeOut,
    images: { seledin, pinky, yellow }
  } = useContext(HeroContext);

  const handleClick = () => {
    setShowHero(false);
  };

  return (
    <CSSTransition
      in={showHero}
      timeout={2000}
      classNames="faded"
      onExited={handleHeroFadeOut}
    >
      <section>
        <header className={styles.header}>
          <h1 className={styles.heading}>Monsterquest</h1>
          <p className={styles.subtext}>
            <span>I will traverse across the tree,</span>
            <span>Regexing far and wide,</span>
            <span>To catch them all is my real test,</span>
            <span>To handle is my cause...</span>
          </p>
          <button onClick={handleClick} className={styles.btn}>
            Gotta fetch 'em all!
          </button>
        </header>
        <div>
          <HeroImage color="seledin" src={seledin} />
          <HeroImage color="pinky" src={pinky} />
          <HeroImage color="yellow" src={yellow} />
        </div>
      </section>
    </CSSTransition>
  );
};

export default HeroWrapper;
