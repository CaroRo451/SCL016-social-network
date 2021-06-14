export const addRecipe = (recipe, id) => {
  const list = document.getElementById('list');
  const node = document.createElement('article');
  node.innerHTML = `
    <div class="post">
    <h2>${recipe.title}</h2>
    <p class="content">${recipe.content}</p>
    <div>
    <button type="button" class="btnEdit" value=${id}>Editar</button>
    <button type="button" class="btnDelete" value=${id}>Eliminar</button>
    </div>
    </div>
    `;
  list.appendChild(node);
};

/* export const turnHash = (hash) => {
  window.location.hash = hash;
}; */

// aqui exportaras las funciones que necesites
