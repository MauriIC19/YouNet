//Declaración de Problemas

usuarios = TAFFY([{
    idUser: 1,
    Foto: "https://www.fakepersongenerator.com/Face/female/female20131023571772247.jpg",
    Nombre: "Shannon C Magee",
    Titulo: "Ingeniera en Sistemas",
    Ciudad: "Patriot, Indiana(IN)",
    Correo: "megane1992@gmail.com",
    Telefono: "317-809-5173"
}, {
    idUser: 2,
    Foto: "https://www.fakepersongenerator.com/Face/female/female20151024290465118.jpg",
    Nombre: "Julie K Carmona",
    Titulo: "Mercadóloga",
    Ciudad: "Rolla, Missouri(MO)",
    Correo: "neil_schowalt@hotmail.com",
    Telefono: "573-578-9839"
}, {
    idUser: 3,
    Foto: "https://www.fakepersongenerator.com/Face/male/male1085629518097.jpg",
    Nombre: "Victor B Aponte",
    Titulo: "Diseñador Gráfico",
    Ciudad: "Elkhart, Indiana(IN)",
    Correo: "brent_low7@gmail.com",
    Telefono: "317-307-4602"
}]);

if (window.addEventListener) {
    window.addEventListener('load', cargarContactos);
}

function cargarContactos() {

    eliminarElementosHijos("resultado-contenedor");

    usuariosTodos = usuarios().get();

    cantidadUsuariosTodos = Object.keys(usuariosTodos).length;

    for (var i = 0; i < cantidadUsuariosTodos; i++) {

        usuario = usuariosTodos[i];

        var contenedorUsuarios = document.getElementById("resultado-contenedor");

        card = document.createElement("div");
        card.classList.add("card");

        imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.setAttribute("src", usuario['Foto'])

        cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        h5Titulo = document.createElement("h5");
        h5Titulo.classList.add("card-title");
        h5TituloTxt = document.createTextNode(usuario['Nombre']);
        h5Titulo.appendChild(h5TituloTxt);

        p1 = document.createElement("p");
        p1.classList.add("card-text");
        p1Txt = document.createTextNode(usuario['Titulo'])
        p1.appendChild(p1Txt);

        p2 = document.createElement("p");
        p2.classList.add("card-text");
        p2Txt = document.createTextNode(usuario['Ciudad'])
        p2.appendChild(p2Txt);

        p3 = document.createElement("p");
        p3.classList.add("card-text");
        aLink3 = document.createElement("a");
        aLink3.classList.add("card-link");
        aLink3.setAttribute("href", "mailto:" + usuario['Correo']);
        aLinkTxt3 = document.createTextNode(usuario['Correo']);
        aLink3.appendChild(aLinkTxt3);
        p3.appendChild(aLink3);

        p4 = document.createElement("p");
        p4.classList.add("card-text");
        aLink4 = document.createElement("a");
        aLink4.classList.add("card-link");
        aLink4.setAttribute("href", "tel:" + usuario['Telefono']);
        aLinkTxt4 = document.createTextNode(usuario['Telefono']);
        aLink4.appendChild(aLinkTxt4);
        p4.appendChild(aLink4);

        cardBody.appendChild(h5Titulo);
        cardBody.appendChild(p1);
        cardBody.appendChild(p2);
        cardBody.appendChild(p3);
        cardBody.appendChild(p4);

        card.appendChild(imagen);
        card.appendChild(cardBody);

        contenedorUsuarios.appendChild(card);
    }
}

function registrarUsuario() {
    ultimoUsuario = usuarios().last();

    idUltimoUsuario = ultimoUsuario['Pro'];

    idNuevoUsuario = idUltimoUsuario + 1;

    fotoNuevoUsuario = document.getElementById("inputFoto").value;
    nombreNuevoUsuario = document.getElementById("inputNombre").value;
    tituloNuevoUsuario = document.getElementById("inputTitulo").value;
    ciudadNuevoUsuario = document.getElementById("inputCiudad").value;
    mailNuevoUsuario = document.getElementById("inputMail").value;
    telNuevoUsuario = document.getElementById("inputNumero").value;


    document.getElementById("inputFoto").value = "";
    document.getElementById("inputNombre").value = "";
    document.getElementById("inputTitulo").value = "";
    document.getElementById("inputCiudad").value = "";
    document.getElementById("inputMail").value = "";
    document.getElementById("inputNumero").value = "";

    usuarios.insert({
        idUser: idNuevoUsuario,
        Foto: fotoNuevoUsuario,
        Nombre: nombreNuevoUsuario,
        Titulo: tituloNuevoUsuario,
        Ciudad: ciudadNuevoUsuario,
        Correo: mailNuevoUsuario,
        Telefono: telNuevoUsuario
    });
    cargarContactos();
}

function eliminarElementosHijos(idElemento) {
    var elemento = document.getElementById(idElemento);
    while (elemento.firstChild) {
        elemento.removeChild(elemento.firstChild);
    }
}

function buscarUsuario() {
    parametro = document.getElementById("buscar").value;

    coincidencias = [];

    usuariosTodos = usuarios().get();

    cantidadUsuariosTodos = Object.keys(usuariosTodos).length;

    for (var i = 0; i < cantidadUsuariosTodos; i++) {

        usuario = usuariosTodos[i];

        caracteristicasUsuario = Object.keys(usuario).length;

        bandera = true;


        Object.keys(usuario).forEach(function(key) {
            caracteristica = String(usuario[key]);

            similitud = similarity(parametro, caracteristica);

            console.log

            if (similitud > 0.3) {
                coincidencias.push(i + 1);

            }
        })
    }

    coincidenciasSinRepetir = coincidencias.filter(function(elemento, pos) {
        return coincidencias.indexOf(elemento) == pos;
    })

    eliminarElementosHijos("resultado-contenedor");

    coincidenciasSinRepetir.forEach(function(idUsuario) {
        usuarioActual = usuarios({
            idUser: idUsuario
        }).get();

        usuarioActual = usuarioActual[0];

        var contenedorUsuarios = document.getElementById("resultado-contenedor");

        card = document.createElement("div");
        card.classList.add("card");

        imagen = document.createElement("img");
        imagen.classList.add("card-img-top");
        imagen.setAttribute("src", usuarioActual['Foto'])

        cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        h5Titulo = document.createElement("h5");
        h5Titulo.classList.add("card-title");
        h5TituloTxt = document.createTextNode(usuarioActual['Nombre']);
        h5Titulo.appendChild(h5TituloTxt);

        p1 = document.createElement("p");
        p1.classList.add("card-text");
        p1Txt = document.createTextNode(usuarioActual['Titulo'])
        p1.appendChild(p1Txt);

        p2 = document.createElement("p");
        p2.classList.add("card-text");
        p2Txt = document.createTextNode(usuarioActual['Ciudad'])
        p2.appendChild(p2Txt);

        p3 = document.createElement("p");
        p3.classList.add("card-text");
        aLink3 = document.createElement("a");
        aLink3.classList.add("card-link");
        aLink3.setAttribute("href", "mailto:" + usuarioActual['Correo']);
        aLinkTxt3 = document.createTextNode(usuarioActual['Correo']);
        aLink3.appendChild(aLinkTxt3);
        p3.appendChild(aLink3);

        p4 = document.createElement("p");
        p4.classList.add("card-text");
        aLink4 = document.createElement("a");
        aLink4.classList.add("card-link");
        aLink4.setAttribute("href", "tel:" + usuarioActual['Telefono']);
        aLinkTxt4 = document.createTextNode(usuarioActual['Telefono']);
        aLink4.appendChild(aLinkTxt4);
        p4.appendChild(aLink4);

        cardBody.appendChild(h5Titulo);
        cardBody.appendChild(p1);
        cardBody.appendChild(p2);
        cardBody.appendChild(p3);
        cardBody.appendChild(p4);

        card.appendChild(imagen);
        card.appendChild(cardBody);

        contenedorUsuarios.appendChild(card);
    });
}

//Distancia de Levenshtein 

function similarity(s1, s2) {

    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
        return 1.0;
    }
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
}

function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
        var lastValue = i;
        for (var j = 0; j <= s2.length; j++) {
            if (i == 0)
                costs[j] = j;
            else {
                if (j > 0) {
                    var newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1))
                        newValue = Math.min(Math.min(newValue, lastValue),
                            costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0)
            costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}