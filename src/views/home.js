import { entry } from '../lib/firebase.js';
// import { turnHash } from '../lib/index.js';

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
        <input type="email" id="email" class="inputLogin" placeholder="Ingresa tu correo" />
        <input type="password" id="password" class="inputLogin" placeholder="Contraseña"/>
        <a href="#/mainView" id="entry"><button class="entryBtn">Ingresar</button></a>
        <a href="#/registrate" class="registBtn">Regístrate</a>
        <a id="gBtn"><img src="img/google-logo.png"></a>    
    </section>
    `;
  divHome.innerHTML = viewHome;

  divHome.querySelector('#entry').addEventListener('click', () => {
    const email = divHome.querySelector('#email').value;
    const password = divHome.querySelector('#password').value;
    entry(email, password);
  });

  // divHome.querySelector('#gBtn').addEventListener('click', homeG);
  return divHome;
};
