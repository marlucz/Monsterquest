import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import HeroImage from './HeroImage';
import './HeroWrapper.scss';

const HeroWrapper = ({ clickBtn, images: { seledin, pinky, yellow } }) => {
  const [showHero, setShowHero] = useState(true);
  return (
    <CSSTransition
      in={showHero}
      timeout={2000}
      classNames="faded"
      onExited={clickBtn}
    >
      <section className="hero">
        <header className="hero__header">
          <h1 className="hero__heading">Monsterquest</h1>
          <p className="hero__subtext">
            <span>I will traverse across the tree,</span>
            <span>Regexing far and wide,</span>
            <span>To catch them all is my real test,</span>
            <span>To handle is my cause...</span>
          </p>
          <button
            onClick={() => setShowHero(false)}
            className="btn btn--bottom"
          >
            Gotta fetch 'em all!
          </button>
        </header>
        <div className="hero__images">
          <HeroImage color="seledin" src={seledin} />
          <HeroImage color="pinky" src={pinky} />
          <HeroImage color="yellow" src={yellow} />
        </div>
      </section>
    </CSSTransition>
  );
};

HeroWrapper.propTypes = {
  clickBtn: PropTypes.func.isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired
};

export default HeroWrapper;
