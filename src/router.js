import { home } from './views/home.js';
import { account } from './views/account.js';
import { mainView } from './views/mainView.js';
import { showPost } from './lib/firebase.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');
  containerRoot.innerHTML = '';

  switch (hash) {
    case '':
      containerRoot.appendChild(home());
      break;
    case '#/':
      containerRoot.appendChild(home());
      break;
    case '#/registrate':
      containerRoot.appendChild(account());
      break;
    case '#/mainView':
      containerRoot.appendChild(mainView());
      break;
    case '#/userCreate':
      containerRoot.appendChild(mainView());
      break;
    case '#/homeG':
      containerRoot.appendChild(mainView());
      break;
    default:
      containerRoot.innerHTML = 'ERROR';
      break;
  }
};

export const changeView = (hash) => showTemplate(hash);
   
/* if (hash === '#/') {
    return showTemplate(hash);
  }
  if (hash === '#/registrate') {
    return showTemplate(hash);
  }
  if (hash === '#/homeG') {
    return showTemplate(hash);
  }
  if (hash === '#/mainView') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
}; */