

window.onload = function() {
    var links = document.getElementsByClassName("product-image");
	for (let i = 0; i< links.length; i++){
		links[i].style.cursor = "pointer";
		if (i==0){
			links[i].onclick = function() {
			 alert("Este sobre no ha salido en el país aún.\nLo actualizaremos cuando llegue.");
		};
		}
		else{
			links[i].onclick = function() {
			location.replace("https://alex-x-w-pos.github.io/ProyectoYuGiOhGYE/galeriaCartas/galeriaCartas" + i + ".html");
		};
		}
		
	}
	var links2 = document.getElementsByClassName("product-title");
	for (let i = 0; i< links2.length; i++){
		links2[i].style.cursor = "pointer";
		links2[i].style.textDecoration = "underline";
		if (i==0){
			links2[i].onclick = function() {
			 alert("Este sobre no ha salido en el país aún.\nLo actualizaremos cuando llegue.");
		};
		}
		else{
			links2[i].onclick = function() {
			location.replace("https://alex-x-w-pos.github.io/ProyectoYuGiOhGYE/galeriaCartas/galeriaCartas" + i + ".html");
		};
		}
		
	}
}