let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];

// Your code here
let list = document.getElementById("mySelect");
for(let i = 0; i < countries.length; i++){
    let newOption = document.createElement("option");
    newOption.value = countries[i];
    newOption.innerHTML = countries[i];
    list.appendChild(newOption);
  
}

list.addEventListener("change", function() {
    let selectedCountry = list.value;
    alert(selectedCountry);
});

