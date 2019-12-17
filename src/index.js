import './scss/style.scss';

import getData from './components/testComponent';

const date = document.createElement('h2');
date.textContent = getData();
document.body.appendChild(date);
