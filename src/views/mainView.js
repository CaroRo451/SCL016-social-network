import { showPost, sendPost } from '../lib/firebase.js';

export const mainView = () => {
  const navProfile = document.createElement('main');
  const viewProfile = `
  
          <img class="logo" src="img/logo.png">
          <form id="newPost">
          <input type="text" id="title" placeholder="Título de la Receta" required>    
          <input type="text" class="textPost" id="recipe" placeholder="¡Cuéntanos como hiciste esta receta!" required>
          <input type="submit" value="Publicar" class="addBtn">
          </form>
          <article id="list">
          </article>
  `;

  navProfile.innerHTML = viewProfile;
  showPost();

  // Aquí creamos boton publicar
  const btnPublicar = navProfile.querySelector('.addBtn');
  btnPublicar.addEventListener('click', () => {
    const titlePost = document.getElementById('title').value;
    const recipePost = document.getElementById('recipe').value;
    if (titlePost === '' || recipePost === '') {
      alert('Debes ingresar contenido');
    } else {
      sendPost(titlePost, recipePost);
    }
  });

  return navProfile;
};

/*
export const editPost = () => {
  const navPost = document.createElement('nav');
  const viewPost = `
          <ul>Like</ul>
          <ul>Editar Post</ul>
          <ul>Eliminar Post</ul>
    `;
  navPost.innerHTML = viewPost;
  return navPost;
}; */
