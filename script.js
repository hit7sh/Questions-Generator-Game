function temp() {
	window.alert("You Clicked Home")
	return;
}

var modal = getElementById('id_1');
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}