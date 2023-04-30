var departmentId = document.getElementById("DepartmentId");
var municipalityId = document.getElementById("municipality");
var departmentsJSON = null;

departmentId.addEventListener("click", function () {
  if (departmentsJSON != null) return;

  fetch("http://localhost:3000/options/department")
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((departments) => {
      console.log(departments);
      departmentsJSON = departments;
      departments.forEach((department) => {
        const optionElement = document.createElement("option");
        optionElement.value = department.Id;
        optionElement.textContent = department.Name;
        departmentId.appendChild(optionElement);
      });
    })
    .catch((error) => console.error(error));
});

departmentId.addEventListener("change", function () {
  console.log(departmentId.value);
  var selectedDepartmentId = departmentId.value;

  if (selectedDepartmentId == 0) return;
  fetch(`http://localhost:3000/options/municipality/${selectedDepartmentId}`)
    .then((response) => {
      console.log(response);
      return response.json();
    })

    .then((municipalities) => {
      console.log(municipalities);
      municipalityId.options.length = 0;
      const optionElement = document.createElement("option");
      optionElement.value = 0;
      optionElement.textContent = "Seleccionar";
      municipalityId.appendChild(optionElement);

      municipalities.forEach((municipality) => {
        const optionElement = document.createElement("option");
        optionElement.value = municipality.Id;
        optionElement.textContent = municipality.Name;
        municipalityId.appendChild(optionElement);
      });
    })
    .catch((error) => console.error(error));
});


