import React from 'react';
import PropTypes from 'prop-types';

import styles from './MessageHandler.module.scss';

const MessageHandler = ({ children, image, src, alt }) => {
  return (
    <div className={styles.message}>
      <h2 className={styles.messageText}>{children}</h2>
      {image ? <img className={styles.messageImage} src={src} alt={alt} /> : ''}
    </div>
  );
};

MessageHandler.propTypes = {
  children: PropTypes.string.isRequired,
  image: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string
};

MessageHandler.defaultProps = {
  image: null,
  src: null,
  alt: null
};

export default MessageHandler;
