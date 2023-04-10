document.addEventListener('DOMContentLoaded', function() {
    const selectUserType = document.querySelector('#municipality');
  
    fetch('http://localhost:3000/options/municipality')
      .then(response => {
        console.log(response);
        return response.json();
      })
      
      
    
      .then(municipality =>  {
        console.log(municipality);
        municipality.forEach(municipality => {
          const optionElement = document.createElement('option');
          optionElement.value = municipality.Id;
          optionElement.textContent = municipality.Name;
          selectUserType.appendChild(optionElement);
        });
      })
      .catch(error => console.error(error));
      
     
    });