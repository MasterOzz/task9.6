var buttonClick = document.getElementById("addElem");
var adToList = document.getElementById("lista");

buttonClick.addEventListener("click", addList);

var listNumber = document.getElementsByTagName("li");


function addList() {
	
	adToList.innerHTML += "<li>item " + listNumber.length +"</li>";

}