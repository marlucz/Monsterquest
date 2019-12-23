import React from 'react';
import PropTypes from 'prop-types';
import './MessageHandler.scss';

const MessageHandler = ({ children, image, src, alt }) => {
  return (
    <div className="message">
      <h2 className="message__text">{children}</h2>
      {image ? <img className="message__image" src={src} alt={alt} /> : ''}
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
