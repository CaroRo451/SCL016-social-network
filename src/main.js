// Este es el punto de entrada de tu aplicacion
import { changeView } from './router.js';

const initRouter = () => {
  window.addEventListener('hashchange', () => {
    changeView(window.location.hash);
  });
};
// window.addEventListener('load', initRouter);
window.addEventListener('load', () => {
  changeView(window.location.hash);
  initRouter();
});
