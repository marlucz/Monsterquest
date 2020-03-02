import React from 'react';
import PropTypes from 'prop-types';
import './HeroImage.scss';

const HeroImage = ({ color, src }) => (
  <img
    className={`hero__image hero__image--${color}`}
    src={src}
    alt={`${color} monster popping up from the corner of the screen`}
  />
);

PropTypes.objectOf(PropTypes.string);

export default HeroImage;
