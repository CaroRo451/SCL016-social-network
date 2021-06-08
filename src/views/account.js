export const account = () => {
  const userNew = document.createElement('nav');
  const navUser = `
    <img class="logo" src="img/logo.png">
    <section class="newlogin">
      <h2>Registrarse</h2>
      <input type="name" id="name" placeholder="Ingresa tu nombre" />
      <input type="email" id="email" placeholder="Ingresa tu correo" />
      <input type="password" id="password" placeholder="Contraseña" />
      <a href="#/userCreate"><button id="crear">Crear</button></a> 
    </section>
    `;
  userNew.innerHTML = navUser;
  return userNew;
};
