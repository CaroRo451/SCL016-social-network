/* eslint-disable no-alert */
// Inicio de sesión usuarios registrados

export const entry = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/mainView';
    })
    .catch(() => {
      alert('Usuario o contraseña no valido');
      window.location.hash = '#/';
    });
};

const db = firebase.firestore();
export const create = (post) => db.collection('recipes').add({
  post,
});
export const bringPost = () => {
  db.collection('recipes').onSnapshot((querySnapshot) => {
    const addPost = document.querySelector('#list');
    addPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      addPost.innerHTML += /* html */ `
        <div class="inputPost" id="postText">${doc.data().post}</div>
        <button type="button" class="btnCrud" id="btnEdit" data-id='${data.id}'>Editar</button>
        <button type="button" class="btnCrud" id="btnDelete" data-id='${data.id}'>Eliminar</button>
      `;
      const btnDelete = document.querySelectorAll('#btnDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', (e) => {
          console.log('Borrado Correctamente');
          deletePost(e.target.dataset.id);
        });
      });
    });
  });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#/mainView';
  } else {
    window.location.hash = '#/';
  }
});

// Login con Google
export const homeG = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      window.location.hash = '#/mainView';
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode, errorMessage);
    });
};

/*
Cerrar sesión
export const signOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
} */

/* Registro de usuarios nuevos

export const homeReg = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
  */

// Observador de estado de autenticación