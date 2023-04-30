document.addEventListener('DOMContentLoaded', function() {
    const submit = document.querySelector("#submit");
    const form = document.querySelector("#form_control");
    const Name = document.querySelector("#f_username");
    const LastName = document.querySelector("#l_name");
    const  DateOfBirth  = document.querySelector("#user_DoB");
    const Email = document.querySelector("#user_email");
    const Password = document.querySelector("#password");
    const MunicipalityId  = document.querySelector("#municipality")
    const InstitutionId = document.querySelector("#institution");
    
    const UserTypeId = document.querySelector("#UserTypeId");
    

  




    submit.addEventListener("click", onSubmit);
  
    function onSubmit(event) {
      event.preventDefault();
      console.log("prueba fetch ");
      console.log("nombre:", Name.value);
      console.log("apellidos:", LastName.value);
      console.log("fecha nacimiento:", DateOfBirth.value);
      console.log("email:", Email.value);
      console.log("contraseña:", Password.value);
      console.log("municipio:", MunicipalityId .value);
      console.log("institucion:", InstitutionId .value);
      console.log("usuario: ", UserTypeId.value);

     
    
  
      const URL = "http://localhost:3000/form";
  
      const body = {
        Name: Name.value,
        LastName: LastName.value,
        DateOfBirth: DateOfBirth.value,
        Email: Email.value,
        Password: Password.value,
        MunicipalityId : MunicipalityId .value,
        InstitutionId: InstitutionId.value,
        UserTypeId: UserTypeId.value,
        
        
      };
  
      const parametros = {
       headers: { "Content-Type": "application/json; charset=UTF-8" },
        body: JSON.stringify(body),
        method: "POST",
        credentials: "include",
        mode: "cors",
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