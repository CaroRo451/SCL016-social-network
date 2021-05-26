import { enter } from '../lib/index.js';

export const home = () => {
  const divHome = document.createElement('div');

  const viewHome = `
    <img class="logo" src="img/logo.png">
    <nav>
        <ul></ul>
        <ul></ul>
     </nav>
    <h1>BIENVENIDOS</h1>
    <section class="login">
        <input type="email" id="email" placeholder="Ingresa tu correo" />
        <input type="password" id="password" placeholder="Contraseña" />
        <button id="entry">Ingresar</button>
        <button id="check">Regístrate</button>

        <img src="img/google-logo.png" class="google">
        <h1 id="login"></h1>
    </section>
    ` 
    divHome.innerHTML = viewHome;

  /* const btn = viewHome.querySelector('entry');
  btn.addEventListener('click', () => {
    enter();
  }); */
  return viewHome;
};
