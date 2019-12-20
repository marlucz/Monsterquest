import React from 'react';
import { images } from '../../data/imagesData';
import './HeroWrapper.scss';

const HeroWrapper = () => (
  <section className="hero">
    <header className="hero__header">
      <h1 className="hero__heading">Monsterquest</h1>
      <p className="hero__subtext">
        <span>I will traverse across the tree,</span>
        <span>Regexing far and wide,</span>
        <span>To catch them all is my real test,</span>
        <span>To handle is my cause...</span>
      </p>
      <button id="fetchBtn" className="btn btn--bottom">
        Gotta fetch 'em all!
      </button>
    </header>
    <img
      className="hero__image hero__image--seledin"
      src={images.seledin}
      alt="seledin monster popping up from the corner of the screen"
    />
    <img
      className="hero__image hero__image--pinky"
      src={images.pinky}
      alt="pinky monster popping up from the corner of the screen"
    />
    <img
      className="hero__image hero__image--yellow"
      src={images.yellow}
      alt="yellow monster popping up from the corner of the screen"
    />
  </section>
);

export default HeroWrapper;
