import './styles/styles.sass';
import './styles/styles.scss';

import hello from './app-home.js';
hello('user');

import {login} from './app-login.js';
login('admin', 'P@sswo3d');

const f = a => a*a;
console.log(f(7));

import {num} from './app-home.js';
num(123);

import {x} from './app-home.js';
console.log(x);

import './app-image.js';
