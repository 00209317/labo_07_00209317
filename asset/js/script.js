
window.addEventListener('load', () => {
    var container = document.getElementById("c1");
    /*Contiene una etiqueta div que pertenece a la clase container*/
    container.innerText = "HOLA xD";
    /*Visualizo el texto dentro de la cajita con id c1*/
    container.style.backgroundColor = "#000000";

    container.style.color = "#1cb723";
    container.style.width = "200px";
    container.style.height = "200px";


    container.innerHTML = "<input type='text' placeholder='escriba su texto'>";


    /*Se visualiza el cambio de fondo, de fuente (sus colores) y alto y ancho mas grandes*/
    /*innerHtml obtiene contenido en formato en HTML, innerText nos devuelve el texto interior del elemento*/

    let containers = document.querySelectorAll(".c2");
    /*Almacena los divs representados con la clase .c2*/

    containers.forEach(element => {
        element.style.backgroundColor = "#009999";
        element.innerHTML = "<input type='text' placeholder='escriba su texto'>";
    });

    /*Se muestra en pantalla el cambio de color de los .c2*/
    /*innerHtml obtiene contenido en formato en HTML, innerText nos devuelve el texto interior del elemento*/

    var boton = document.getElementById("btn-click");

    boton.onclick = function (evt) {
        alert("Hola mundo");
    }

    var btnCopy = document.getElementById("btnCopy");
    btnCopy.onclick = function (evt) {
        let msj = document.getElementById('textMsj').value;
        document.getElementById('showMsj').innerText = msj;
    }


});
