var http_request = false;

function makeRequest(contenido) {
	let url = 'data/'+contenido +'.json';

    http_request = false;

    if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/plain');
            // Ver nota sobre esta linea al final
        }
    } else if (window.ActiveXObject) { // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {}
        }
    }

    if (!http_request) {
        alert('Falla :( No es posible crear una instancia XMLHTTP');
        return false;
    }
    http_request.onreadystatechange = alertContents;
    http_request.open('GET', url, true);
    http_request.send(null);
}

function alertContents() {
    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
			var jsonDoc = http_request.responseText;
			console.log(jsonDoc);
			var array = JSON.parse(jsonDoc);
			console.log(array);
			var cajon_contenido = document.getElementById("listado-seccion-productos");
			var cuerpo = document.getElementsByTagName("body")[0];
			cuerpo.style.backgroundSize = "contain";
			cajon_contenido.setAttribute("class","container content-box contenedor");
			for (let i = 0; i<array.length; i++){
				let div = document.createElement("div");
				div.setAttribute("class","product-listing");
				let div2 = document.createElement("div");
				div2.setAttribute("class","row");
				let div3 = document.createElement("div");
				div3.setAttribute("class","col-md-3 col-xs-3");
				let div4 = document.createElement("div");
				div4.setAttribute("class","col-md-6 col-xs-6");
				let div5 = document.createElement("div");
				div5.setAttribute("class","col-md-3 col-xs-3");
				let imagen = document.createElement("img");
				imagen.setAttribute("src",array[i].link_imagen);
				imagen.setAttribute("alt",array[i].producto);
				imagen.setAttribute("class","product-image center-block");
				div3.appendChild(imagen);
				let p = document.createElement("p");
				p.setAttribute("class","product-title");
				let p1 = document.createElement("p");
				p1.setAttribute("class","product-description");
				p.innerHTML = array[i].producto;
				p1.innerHTML = array[i].descripcion;
				let br = document.createElement("br");
				div4.appendChild(p);
				div4.appendChild(br);
				div4.appendChild(p1);
				let boton = document.createElement("button");
				boton.setAttribute("id",array[i].producto);
				boton.setAttribute("type","button");
				boton.setAttribute("class","btn btn-primary btn-block bouton-image monBouton");
				boton.innerHTML="<span>Lista de Cartas</span>";
				if (i==0) {
					boton.onclick = function () { alert("Este sobre no ha salido en el país aún.\nLo actualizaremos cuando llegue.");};//esto debo cambiarlo luego :V
				}
				else {
					boton.onclick = function () { location.replace("https://alex-x-w-pos.github.io/ProyectoYuGiOhGYE/galeriaCartas/galeriaCartas" + i + ".html");};//esto debo cambiarlo luego :V
				}
				div5.appendChild(boton);
				div2.appendChild(div3);
				div2.appendChild(div4);
				div2.appendChild(div5);
				div.appendChild(div2);
				cajon_contenido.appendChild(div);
			}
        } else {
            alert('No existe implementación para este producto aún.\nEsto se corregirá en futuras versiones.');
			
        }
    }
}








window.onload = function() {
    var links = document.getElementsByClassName("btn");
	for (let i = 0; i< links.length; i++){
		links[i].onclick = function() {
			makeRequest(links[i].getAttribute("id"));
		};
	}
}