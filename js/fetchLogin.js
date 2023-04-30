document.addEventListener('DOMContentLoaded',function(){

const email = document.querySelector("#email");
const password = document.querySelector("#password");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form-control");

submit.addEventListener("click",onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const body = {
    password: password.value,
    email: email.value,
  };

  console.log(body);

  const URL = "http://localhost:3000/login";

  const parametros = {
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(body),
    method: "POST", 
    credentials: "include",
    mode: "cors",
  };
  


  fetch(URL, parametros)
    .then((data) => data.json())
    .then((res) => {
      if (res.message) {
        localStorage.setItem('authToken', res.token); // almacenar el token en el local storage
        window.location.replace("/home.html"); // redireccionar al usuario a la página principal
        alert("Bienvenido! " +  res.email);

        console.log(res);

        //const cookie = res.headers.get('Set-Cookie');
        
      //console.log(cookie);
      } else {
        console.error(res);
        console.log(document.cookie);
      
      }
    })
    .catch((error) => console.error(error));
}
});
