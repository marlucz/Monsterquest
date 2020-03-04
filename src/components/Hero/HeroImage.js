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

PropTypes.objectOf(PropTypes.string);

export default HeroImage;
