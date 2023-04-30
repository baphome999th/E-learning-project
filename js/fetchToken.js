const authToken = localStorage.getItem('authToken');

fetch('http://localhost:3000/getUser', {
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${authToken}`
  }
})
.then(response => {
  if (!response.ok) {
    throw new Error('Error en la respuesta del servidor');
  }
  return response.json(response);
})
.then(data => {
  const UserTypeId = data[0].UserTypeId;
  //console.log(data);
  console.log('Valor de UserTypeId:', UserTypeId); // Agregar este console.log
  if (UserTypeId === 1) {
    // Código para estudiante
    window.location.replace("./internalApp/html/estudiante.html");
  } else if (UserTypeId === 2) {
    // Código para profesor
    window.location.replace("./internalApp/html/profesor.html");
  } else {
    throw new Error('Tipo de usuario desconocido');
  }
})
.catch(error => {
  console.error('Error en la petición fetch:', error);
});