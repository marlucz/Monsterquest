import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';

import HeroProvider from './context/HeroContext';

import './styles/index.scss';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <HeroProvider>
      <App />
    </HeroProvider>,
    document.getElementById('root')
  );
});
