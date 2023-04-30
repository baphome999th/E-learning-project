document.addEventListener('DOMContentLoaded', function() {
    const selectUserType = document.querySelector('#UserTypeId');
  
    fetch('http://localhost:3000/options/user_types')
      .then(response => {
        console.log(response);
        return response.json();
      })
      
      
    
      .then(userTypes =>  {
        console.log(userTypes);
        userTypes.forEach(userType => {
          const optionElement = document.createElement('option');
          optionElement.value = userType.Id;
          optionElement.textContent = userType.UserType;
          selectUserType.appendChild(optionElement);
        });
      })
      .catch(error => console.error(error));
      
     
    });
  
  
  
  
  
  
  