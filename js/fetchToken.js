const authToken = localStorage.getItem('authToken');

fetch('/getUser', {
methods: 'GET',
headers: {
    'Authorization': `Bearer ${authToken}`
  }
})

.then(response =>{

})
.then(error =>{
//notificación del error
})