

document.addEventListener('DOMContentLoaded', function() {
    const submit = document.querySelector("#submit");
    const form = document.querySelector("#form_control");
    const username = document.querySelector("#f_username");
    const email = document.querySelector("#user_email");
    const password = document.querySelector("#password");
    const phonenumber = document.querySelector("#user_phonenumber");
  
    submit.addEventListener("click", onSubmit);
  
    function onSubmit(event) {
      event.preventDefault();
      console.log("prueba fetch ");
      console.log("name:", username.value);
      console.log("Email:", email.value);
      console.log("password:", password.value);
      console.log("Phone number:", phonenumber.value);
  
      const URL = "http://localhost:3000/form";
  
      const body = {
        username: username.value,
        email: email.value,
        password: password.value,
        phonenumber: phonenumber.value
      };
  
      const parametros = {
       headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(body),
        method: "POST"
      };
  
      fetch(URL, parametros)
  .then(data => data.json().catch(() => ({ error: 'No se pudo analizar la respuesta como JSON' })))
  .then(res => {
    if (res.error) {
      console.error(res.error);
    } else {
      console.log(res);
    }
  })
  .catch(error => console.error(error))

}});