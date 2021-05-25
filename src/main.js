// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { home } from './views/home.js';
import { mainView } from './views/mainView.js';
import { menu } from './views/menu.js';

myFunction();
document.getElementById('root').innerHTML = home();
document.getElementById('root').appendChild(mainView());
document.getElementById('root').appendChild(menu());