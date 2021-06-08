/* eslint-disable no-alert */
// Inicio de sesión usuarios registrados

export const entry = (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.hash = '#/mainView';
    })
    .catch(() => {
      alert('Usuario o contraseña no valido');
      window.location.hash = '#/';
    });
};

// Registro de usuarios nuevos

export const homeReg = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

// Observador de estado de autenticación
/*
export const registUser = (callback) => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback('#/mainView');
    } else {
      callback('#/')
    }
  }); */

/* Login con Google
export const homeG = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
}

Cerrar sesión
export const signOut = () => {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
} */
