import React from 'react';
import PropTypes from 'prop-types';
import HeroImage from './HeroImage/HeroImage';
import './HeroWrapper.scss';

const HeroWrapper = ({ clickBtn, images: { seledin, pinky, yellow } }) => (
  <section className="hero">
    <header className="hero__header">
      <h1 className="hero__heading">Monsterquest</h1>
      <p className="hero__subtext">
        <span>I will traverse across the tree,</span>
        <span>Regexing far and wide,</span>
        <span>To catch them all is my real test,</span>
        <span>To handle is my cause...</span>
      </p>
      <button onClick={clickBtn} className="btn btn--bottom">
        Gotta fetch 'em all!
      </button>
    </header>
    <HeroImage color="seledin" src={seledin} />
    <HeroImage color="pinky" src={pinky} />
    <HeroImage color="yellow" src={yellow} />
  </section>
);

HeroWrapper.propTypes = {
  clickBtn: PropTypes.func.isRequired,
  images: PropTypes.objectOf(PropTypes.string).isRequired
};

export default HeroWrapper;
