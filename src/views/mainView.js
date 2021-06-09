export const mainView = () => {
  const navProfile = document.createElement('main');
  const viewProfile = `
          <img class="logo" src="img/logo.png">
          <div class="newPost">
          <textarea id="post" class="post" placeholder="Escribe Tu Receta"></textarea>
          <button class="postBtn">Publicar</button>
          </div>
  `;
  navProfile.innerHTML = viewProfile;
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
