import './styles/styles.css';

import fromHome from './home.js';
console.log(fromHome);

import welcome from './home.js';
welcome('user');

require('./login.js');
import login from './login.js';
login('admin', 'P@sswo3d');

console.log('App.js works!');