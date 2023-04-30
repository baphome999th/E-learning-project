var institutionId = document.getElementById("institution");
var institutionJSON = null;

console.log(institution);
institution.addEventListener("click", function () {
  console.log("Select clicked"); // add this line to check if event listener is working
  if (institutionJSON != null) return;

  fetch("http://localhost:3000/options/institution")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(institutions => {
      console.log(institutions);
      institutionId.options.length = 0;

      institutions.forEach(institution => {
        const optionElement = document.createElement("option");
        optionElement.value = institution.Id;
        optionElement.textContent = institution.Name;
        institutionId.appendChild(optionElement); // should be select.appendChild(optionElement);
      });
    })
    .catch((error) => console.error(error));
});
