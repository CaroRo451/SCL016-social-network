export const loginGoogle = () => {
  const btnGoogle = document.createElement('div');
  const imgGoogle = `
   <img src="img/google-logo.png" class="google">
        <h1 id="login"></h1>
        `;
  btnGoogle.innerHTML = imgGoogle;
  return btnGoogle;
};

/* const btn = viewHome.querySelector('.google');
  btn.addEventListener('click', () => {
    enter();
  }); */