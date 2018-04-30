if (document.getElementById("conflictos")) {
    document.getElementById("conflictos").addEventListener("click", pasarPaginaConflictos);
}

if (document.getElementById("tiempo")) {
    document.getElementById("tiempo").addEventListener("click", pasarPaginaTiempo);
}

if (document.getElementById("networking")) {
    document.getElementById("networking").addEventListener("click", pasarPaginaNetworking);
}

function pasarPaginaConflictos() {
    window.location.href = 'conflictos.html';
}

function pasarPaginaTiempo() {
    window.location.href = 'tiempo.html';
}

function pasarPaginaNetworking() {
    window.location.href = 'networking.html';
}