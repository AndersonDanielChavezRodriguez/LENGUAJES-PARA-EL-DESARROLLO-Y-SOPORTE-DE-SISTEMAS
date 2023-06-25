 document.getElementById("register") .addEventListener("click", function(){
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    //Enviar un formato de error
    .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    console.log("Cuenta creada" + user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log("error en el registro");
  });

  setTimeout( function(){
    window.location.href = "https://console.firebase.google.com/project/autenticacion-e2b08/overview?hl=es-419";
  },1000)

 })