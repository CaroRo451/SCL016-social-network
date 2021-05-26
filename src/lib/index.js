// aqui exportaras las funciones que necesites

export const myFunction = () => {
  // aqui tu codigo
  console.log('Hola mundo!');
};

export const enter = () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // alert("email="+email+"password="+password);
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};
