//Declaración de Problemas

problemas = TAFFY([{
    Pro: 1,
    Tit: "Pantalla Azul Windows",
    Des: "Al prender mi computadora y usarla durante un rato me sale una pantalla azul indicando que ha ocurrido un error."
}, {
    Pro: 2,
    Tit: "Licencia de Antivirus Vencida",
    Des: "Mi computadora tenía un antivirus pero la licencia ha vencido ¿Qué debería de hacer?"
}, {
    Pro: 3,
    Tit: "La batería de mi Laptop ya no dura nada",
    Des: "Tengo 3 años con mi laptop y la batería ya no rinde nada, por mucho soporta sin estar conectada 10 minutos ¿Algún consejo?"
}]);

soluciones = TAFFY([{
    Pro: 1,
    Sol: "Por experiencia puedo pensar que el sistema operativo ha sido dañado, quizá con una formateada pudiera volver a funcionar."
}, {
    Pro: 1,
    Sol: "Quizá sea un buen momento para pensar en comprar otra."
}, {
    Pro: 1,
    Sol: "Yo tenía el mismo problema, lo que tuve que hacer fue reinstalar el sistema operativo desde las opciones de recuperación de Windows."
}, {
    Pro: 2,
    Sol: "Busca en Internet alguna antivirus con la licencia crackeada."
}, {
    Pro: 2,
    Sol: "Hay muchos antivirus muy buenos gratuitos, deberías buscar en Internet alguno."
}, {
    Pro: 2,
    Sol: "Actualmente Windows ya tiene integrado su propio antivirus, no es necesario que instales uno adicional."
}, {
    Pro: 3,
    Sol: "He escuchado que poniendo la bateria en una bolsa en el congelador recuperan un poco su capacidad de carga."
}, {
    Pro: 3,
    Sol: "Yo tenía el mismo problema, recurrí a comprar una genérica en Bodega Aurrerá y funcionó muy bien."
}, {
    Pro: 3,
    Sol: "Opino igual que la segunda persona, no te arriesges en poner tus aparatos en lugares que no corresponden."
}]);

if (window.addEventListener) {
    window.addEventListener('load', cargarConflictos);
}


function cargarConflictos() {

    eliminarElementosHijos("conflictos-contenedor");

    problemasTodos = problemas().get();

    cantidadProblemasTodos = Object.keys(problemasTodos).length;

    for (var i = 0; i < cantidadProblemasTodos; i++) {

        conflicto = problemasTodos[i];

        var contenedorConflictos = document.getElementById("conflictos-contenedor");

        card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("id", conflicto['Pro']);

        cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        h5Titulo = document.createElement("h5");
        h5Titulo.classList.add("card-title");
        h5TituloTxt = document.createTextNode(conflicto['Tit']);
        h5Titulo.appendChild(h5TituloTxt);

        pSol = document.createElement("p");
        pSol.classList.add("card-text");
        pSolTxt = document.createTextNode(conflicto['Des'])
        pSol.appendChild(pSolTxt);

        aLink = document.createElement("a");
        aLink.classList.add("card-link");
        aLink.setAttribute("onclick", "mostrarSoluciones(" + conflicto['Pro'] + ")");
        aLinkTxt = document.createTextNode("Propón una solución");
        aLink.appendChild(aLinkTxt);

        cardBody.appendChild(h5Titulo);
        cardBody.appendChild(pSol);
        cardBody.appendChild(aLink);

        card.appendChild(cardBody);

        contenedorConflictos.appendChild(card);
    }
}

function mostrarSoluciones(idProblema) {

    sol1 = document.getElementById("sol-1");
    sol2 = document.getElementById("sol-2");
    sol3 = document.getElementById("soluciones-contenedor");
    sol4 = document.getElementById("sol-4");

    sol1.classList.remove("oculto");
    sol2.classList.remove("oculto");
    sol3.classList.remove("oculto");
    sol4.classList.remove("oculto");

    eliminarElementosHijos("soluciones-contenedor");


    solucionesProblema = soluciones({
        Pro: idProblema
    }).get();

    problemaActual = problemas({
        Pro: idProblema
    }).get();
    problemaActual = problemaActual[0];
    tituloProblema = problemaActual['Tit'];

    document.getElementById("titulo-problema").textContent = "";
    document.getElementById("titulo-problema").textContent = tituloProblema;

    btnEnviarSolucion = document.getElementById("btn-enviar-solucion");
    btnEnviarSolucion.setAttribute("onclick", "mandarSolucion(" + problemaActual['Pro'] + ")");

    document.getElementById("solucion-problema-txt").value = "";

    cantidadSoluciones = solucionesProblema.length;

    for (var i = 0; i < cantidadSoluciones; i++) {

        solucion = solucionesProblema[i];

        var contenedorSoluciones = document.getElementById("soluciones-contenedor");

        card = document.createElement("div");
        card.classList.add("card");

        cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        blockquote = document.createElement("blockquote");
        blockquote.classList.add("blockquote");
        blockquote.classList.add("mb-0");

        pSol = document.createElement("p");
        pSol.classList.add("card-text");
        pSolTxt = document.createTextNode(solucion['Sol'])
        pSol.appendChild(pSolTxt);

        blockquote.appendChild(pSol);
        cardBody.appendChild(blockquote);

        card.appendChild(cardBody);

        contenedorSoluciones.appendChild(card);

    }
}

function mandarSolucion(idProblema) {

    solucionProblema = document.getElementById("solucion-problema-txt").value;

    soluciones.insert({
        Pro: idProblema,
        Sol: solucionProblema
    });

    mostrarSoluciones(idProblema);
}

function agregarProblema() {
    ultimoProblema = problemas().last();

    idUltimoProblema = ultimoProblema['Pro'];

    idNuevoProblema = idUltimoProblema + 1;

    nuevoProblemaTituloTxt = document.getElementById("agregar-problema-titulo-txt").value;

    nuevoProblemaTxt = document.getElementById("agregar-problema-txt").value;


    problemas.insert({
        Pro: idNuevoProblema,
        Tit: nuevoProblemaTituloTxt,
        Des: nuevoProblemaTxt
    });

    cargarConflictos();

    nuevoProblemaTituloTxt.value = "";
    nuevoProblemaTxt.value = "";
}

function eliminarElementosHijos(idElemento) {
    var elemento = document.getElementById(idElemento);
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}