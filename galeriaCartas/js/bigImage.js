function showImage(src,alt){
	var bigImagen = document.getElementById("bigImagen");
	bigImagen.setAttribute("src",src);
	bigImagen.setAttribute("alt",alt);
	var dimmer = document.getElementById("dimscreen");
	dimmer.style.display = "initial";
	var imageCase = document.getElementById("imagenGrande");
	imageCase.style.display = "initial";
}

function closeImage (){
	var dimmer = document.getElementById("dimscreen");
	var bigImagen = document.getElementById("bigImagen");
	var imageCase = document.getElementById("imagenGrande");
	imageCase.style.display = "none";
	dimmer.style.display = "none";
	
	bigImagen.setAttribute("src","");
	bigImagen.setAttribute("alt","");
	
	
	
}



window.onload = function() {
    var minis = document.getElementsByClassName("card-image");
	console.log(minis.length);
	for (let i = 0; i< minis.length; i++){
		minis[i].onclick = function() {
			showImage(minis[i].getAttribute("src"),minis[i].getAttribute("alt"));
		};
	}
	var dimmer = document.getElementById("dimscreen");
	dimmer.onclick = function (){
		closeImage();
	};
}