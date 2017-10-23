var list = document.getElementById('lista');
var add = document.getElementById('addElem');

add.addEventListener('click', function() {
	var element = document.createElement('li');
	var listNumber = document.getElementsByTagName('li').length;
	element.innerHTML = 'item ' + listNumber;
	list.appendChild(element);
});
