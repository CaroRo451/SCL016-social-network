import { home } from './views/home.js';
import { account } from './views/account.js';
import { mainView } from './views/mainView.js';

const showTemplate = (hash) => {
  const containerRoot = document.getElementById('root');

  switch (hash) {
    case '':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(home());
      break;
    case '#/':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(home());
      break;
    case '#/registrate':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(account());
      break;
    case '#/mainView':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(mainView());
      break;
    case '#/userCreate':
      containerRoot.innerHTML = '';
      containerRoot.appendChild(mainView());
      break;
    default:
      containerRoot.innerHTML = '';
      break;
  }
};

export const changeView = (hash) => {
  if (hash === '') {
    return showTemplate(hash);
  }
  return showTemplate(hash);
};
