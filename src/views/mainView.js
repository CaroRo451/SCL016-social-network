export const mainView = () => {

  //const sectionView = document.createElement('section');

  const navProfile = document.createElement('nav')
  const viewProfile = ` 
        <ul>Logo</ul>
        <ul>Menu Hamb</ul>
   `
  navProfile.innerHTML = viewProfile;

  /*const navPost = document.createElement('nav')
  const viewPost = ` 
        <ul>Like</ul>
        <ul>Editar Post</ul>
        <ul>Eliminar Post</ul>
  `
  navPost.innerHTML = viewPost;

  navProfile.innerHTML += navPost;*/

  return navProfile;
};