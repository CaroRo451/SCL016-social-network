// Este es el punto de entrada de tu aplicacion

import { myFunction } from './lib/index.js';
import { home } from './views/home.js';
import { loginGoogle } from './views/login.js';
import { mainView, movePost } from './views/mainView.js';
import { menu } from './views/menu.js';
import { account } from './views/account.js';

myFunction();
document.getElementById('root').innerHTML = home();
document.getElementById('root').appendChild(loginGoogle());
document.getElementById('root').appendChild(mainView());
document.getElementById('root').appendChild(movePost());
document.getElementById('root').appendChild(menu());
document.getElementById('root').appendChild(account());
