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

/* Registro de usuarios nuevos

export const homeReg = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);
  */

// Observador de estado de autenticación

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    window.location.hash = '#/';
  } else {
    window.location.hash = '#/mainView';
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
      alert(errorMessage);
    });
};

const db = firebase.firestore();
/*
Cerrar sesión
export const signOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
} */
