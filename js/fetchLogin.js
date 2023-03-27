document.addEventListener('DOMContentLoaded',function(){

const email = document.querySelector("#user_email");
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

  const URL = "http://localhost:3000/login";

  const parametros = {
    headers: { "Content-Type": "application/json; charset=UTF-8" },
    body: JSON.stringify(body),
    method: "POST",
  };
  fetch(URL, parametros)
    .then((data) => data.json())
    .then((res) => {
      if (res.message) {
        window.location.replace("home.html"); // redireccionar al usuario a la página principal
      } else {
        console.error(res.error);
      }
    })
    .catch((error) => console.error(error));
}
});
