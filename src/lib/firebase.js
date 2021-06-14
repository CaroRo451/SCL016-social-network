import { addRecipe } from './index.js';
import { changeView } from '../router.js';

// Inicio sesión usuarios registrados
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

const db = firebase.firestore();

export const showPost = () => {
  db.collection('recipes').get()
    .then((snapshot) => {
      // console.log(snapshot.docs[0].data());
      snapshot.forEach((doc) => {
        // eslint-disable-next-line no-console
        // console.log(doc.data());
        addRecipe(doc.data(), doc.id);
      });
    })
    .then(() => {
      const btnDelete = document.querySelectorAll('.btnDelete');
      btnDelete.forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.value;
          db.collection('recipes').doc(id).delete().then(() => {
            console.log('Document successfully deleted!');
            changeView('#/mainView');
          })
            .catch((error) => {
              console.error('Error removing document: ', error);
            });
        });
      });
    });
};

// Función para enviar post a Firebase
export const sendPost = (titlePost, recipePost) => {
  db.collection('recipes').add({
    title: titlePost,
    content: recipePost,
  }).then(() => {
    changeView('#/mainView');
  });
};

/* export const bringPost = () => {
  db.collection('recipes').onSnapshot((querySnapshot) => {
    const addPost = document.querySelector('#list');
    addPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      addPost.innerHTML += html  `
        <div class="inputPost" id="postText">${doc.data().post}</div>
        <button type="button" class="btnCrud" id="btnEdit" data-id='${data.id}'>Editar</button>
        <button type="button" class="btnCrud" id="btnDelete" data-id='${data.id}'>Eliminar</button>
      `; */

// Observador de estado de autenticación
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#/mainView';
  } else {
    window.location.hash = '#/';
  }
});

/* Registro de usuarios nuevos

export const homeReg = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
  */
