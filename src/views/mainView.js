import { create, bringPost } from '../lib/firebase.js';

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
  const db = firebase.firestore();
  const addRecipe = (recipe) => {
    const list = document.getElementById('list');
    const node = document.createElement('article');
    node.innerHTML = `
      <div class="post">
      <h2>${recipe.title}</h2>
      <p class="content">${recipe.content}</p>
      </div>
      `;
    list.appendChild(node);
  };
  db.collection('recipes').get()
    .then((snapshot) => {
      // console.log(snapshot.docs[0].data());
      snapshot.forEach((doc) => {
        console.log(doc.data());
        addRecipe(doc.data());
      });
    })
    .catch((err) => console.log());
  // Aquí tenemos que crear boton submit
  const btnPublicar = navProfile.querySelector('.addBtn');
  btnPublicar.addEventListener('click', () => {
    const post = navProfile.querySelector('#newPost').value;
    console.log('Publicado Correctamente');
    create(post).then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('newPost').value = '';
    })
      .catch((error) => {
        console.error('Error adding document: ', error);
      });
  });
  bringPost();
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
