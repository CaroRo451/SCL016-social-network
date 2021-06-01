import { entry, homeG } from './lib/firebase.js';
import { turnHash, errorAD } from './lib/index.js';

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
        <a href="" id="gBtn"><img src="img/google-logo.png"></a>    
    </section>
    `;
  divHome.innerHTML = viewHome;

  divHome.querySelector('#entry').addEventListener('click', () => {
    const email = divHome.querySelector('#email').value;
    const password = divHome.querySelector('#password').value;
    entry(email, password)
      .then(() => {
        turnHash('#/mainView');
      }).catch((error) => {
        const errorMessage = error.message;
        const errorUser = divHome.querySelector('#errorMessage');
        errorUser.innerHTML = '';
        errorUser.appendChild(errorAD(errorMessage));
      });
  });

  divHome.querySelector('#gBtn').addEventListener('click', homeG);
  return divHome;
};
