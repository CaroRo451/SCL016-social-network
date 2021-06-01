// Inicio de sesión usuarios registrados

export const homeEnter = (email, password) =>
firebase.auth().signInWithEmailAndPassword(email, password);

// Registro de usuarios nuevos

export const homeReg = (email, password) =>
firebase.auth().createUserWithEmailAndPassword(email, password)
	.then((userCredential) => {
	// Signed in
	var user = userCredential.user;
	// ...
	})
	.catch((error) => {
	var errorCode = error.code;
	var errorMessage = error.message;
	}
