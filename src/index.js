import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './index.scss';

import HeroProvider from './context/HeroContext';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <HeroProvider>
      <App />
    </HeroProvider>,
    document.getElementById('root')
  );
});
