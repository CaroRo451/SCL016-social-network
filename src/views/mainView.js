export const mainView = () => {
  const navProfile = document.createElement('main');
  const viewProfile = `
  
          <img class="logo" src="img/logo.png">
          <form class="newPost">     
          <input type="text" class="textPost" id="recipe" required>
          <input type="submit" value="Publicar" class="addBtn">
          </form>
          <ul id="list">
            <li>Hola</li>
          </ul>
  `;

  navProfile.innerHTML = viewProfile;
  const db = firebase.firestore();
  const addRecipe = (recipe) => {
    const list = document.getElementById('list');
    const node = document.createElement('li');
    node.innerHTML = `
      <div>${recipe.title}</div>
      <div>${recipe.content}</div>
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
