document.addEventListener('DOMContentLoaded', function() {

  const name = document.querySelector("#fname");
  const lastName = document.querySelector("#lname");
  const email = document.querySelector("#email");
  const subject = document.querySelector("#subject");
  const message = document.querySelector("#message");
  const submit = document.querySelector("#submit");
  const formcontrol = document.querySelector("#formcontrol");

  submit.addEventListener("click", onSubmit);

  function onSubmit(event){
    event.preventDefault();
    console.log("name: ", name.value);
    console.log("lname: ", lastName.value);
    console.log("email: ", email.value);
    console.log("subject: ", subject.value);
    console.log("message: ", message.value);

    const URL = "http://localhost:3000/contacto";

    const body = {
      name: name.value,
      lastName: lastName.value,
      email: email.value,
      subject: subject.value,
      message: message.value
    }

    const parametros={
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(body),
      method: "POST",
      credentials: "include",
      mode: "cors",
    }

    fetch(URL, parametros)
      .then(data => data.json().catch(() => ({ error: 'No se pudo analizar la respuesta como JSON' })))
      .then(res => {
        if (res.error) {
          console.error(res.error);
        } else {
          console.log(res);
        }
      })
      .catch(error => console.error(error));
  }

});
