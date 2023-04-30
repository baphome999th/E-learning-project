var selectUserType = document.getElementById('UserTypeId');
var UserTypeJSON = null;

selectUserType.addEventListener('click', function() {
  console.log('Select clicked'); // add this line to check if event listener is working
  if(UserTypeJSON != null) return;

  fetch('http://localhost:3000/options/user_types')
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(userTypes =>  {
      console.log(userTypes);
      selectUserType.options.length = 0 ;
     

      userTypes.forEach(userType => {
        const optionElement = document.createElement('option');
        optionElement.value = userType.Id;
        optionElement.textContent = userType.UserType;
        selectUserType.appendChild(optionElement);
      });
    })
    .catch(error => console.error(error));
});