import { account } from './views/account.js';
import { home } from './views/home.js';
import { loginGoogle } from './views/loginGoogle.js';
import { mainView, editPost } from './views/mainView.js';
import { menu } from './views/menu.js';
import { newPost } from './views/newPost.js';

/* myFunction();
document.getElementById('root').innerHTML = home();
document.getElementById('root').appendChild(loginGoogle());
document.getElementById('root').appendChild(mainView());
document.getElementById('root').appendChild(editPost());
document.getElementById('root').appendChild(menu());
document.getElementById('root').appendChild(account());
document.getElementById('root').appendChild(newPost()); */

export const changeView = (hash) => {
    const root = document.getElementById('root');
    root.innerHTML = '';
    if ( hash === '')
}
