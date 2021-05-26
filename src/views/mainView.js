export const mainView = () => {

  const navProfile = document.createElement('nav');

  const viewProfile = ` 
        <ul>Logo Pagina</ul>
        <ul>Menu Hamb</ul>
   `
  navProfile.innerHTML = viewProfile;


  return navProfile;
};

export const movePost = () => {

  const navPost = document.createElement('nav');

  const viewPost = ` 
        <ul>Like</ul>
        <ul>Editar Post</ul>
        <ul>Eliminar Post</ul>
  `
  navPost.innerHTML = viewPost;

  return navPost;
};