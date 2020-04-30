import React from 'react';
import PropTypes from 'prop-types';

import styles from './HeroImage.module.scss';

const HeroImage = ({ color, src }) => (
  <img
    className={styles[color]}
    src={src}
    alt={`${color} monster popping up from the corner of the screen`}
  />
);

HeroImage.propTypes = {
  color: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
};

export default HeroImage;
