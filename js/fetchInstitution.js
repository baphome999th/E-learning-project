document.addEventListener('DOMContentLoaded', function() {
    const selectUserType = document.querySelector('#institution');
  
    fetch('http://localhost:3000/options/institution')
      .then(response => {
        console.log(response);
        return response.json();
      })
      
      
    
      .then(institution =>  {
        console.log(institution);
        institution.forEach(institution=> {
          const optionElement = document.createElement('option');
          optionElement.value = institution.Id;
          optionElement.textContent = institution.Name;
          selectUserType.appendChild(optionElement);
        });
      })
      .catch(error => console.error(error));
      
     
    });