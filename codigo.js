import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getPerformance } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-performance.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIsA7pDTZHAZfIPicMVtKv_ndt_wMVqdI", //Codigo de acceso
  authDomain: "autenticacion-e2b08.firebaseapp.com",
  projectId: "autenticacion-e2b08",
  storageBucket: "autenticacion-e2b08.appspot.com",
  messagingSenderId: "631683448891",
  appId: "1:631683448891:web:22ae38f20e16a242b75c1e",
  measurementId: "G-RQEN5PHHEJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const perf = getPerformance(app);
const provider = new GoogleAuthProvider(app);

//Registro de google

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });

//Registro de cuenta

document.getElementById("register").addEventListener("click", function () {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, password)
    //Enviar un formato de error
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("Cuenta creada");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log("error en el registro");
    });

})

//Inicio de sesion

document.getElementById("login").addEventListener("click", function () {
  const login_email = document.getElementById("login_email").value;
  const login_password = document.getElementById("login_password").value;

  signInWithEmailAndPassword(auth, login_email, login_password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      console.log("Sesion iniciada");

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      //..
      console.log("error en el inicio de sesion")
    });

  if (error = true) {
    setTimeout(function () {
      window.location.href = "https://console.firebase.google.com/project/autenticacion-e2b08/overview?hl=es-419";
    }, 5000)
  } else {
    window.location.reload();
  }

})

