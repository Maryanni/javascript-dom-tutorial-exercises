let button = document.getElementById("superDuperButton");
button.addEventListener("click", function() {
	// Your code here
	let li = document.createElement("li");
	li.innerHTML = "Fourth element";
	let addLi = document.querySelector("#myList");
	addLi.appendChild(li);
});
