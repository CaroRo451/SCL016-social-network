// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { home } from './views/home.js';

myFunction();
document.getElementById('root').innerHTML = home();
