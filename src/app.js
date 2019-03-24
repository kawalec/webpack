import './styles/styles.css';

import hello from './home.js';
hello('user');

import {login} from './login.js';
login('admin', 'P@sswo3d');

const f = a => a*a;
console.log(f(7));

import {num} from './home.js';
num(123);