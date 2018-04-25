if (document.getElementById("creditos")) {
    document.getElementById("creditos").addEventListener("click", activarModalCreditos);
}

if (document.getElementById("btn-menu")) {
    document.getElementById("btn-menu").addEventListener("click", pasarPaginaMenu);
}

function activarModalCreditos() {
    $('#modal_creditos').modal('show');
}

function pasarPaginaMenu() {
    window.location.href = 'menu.html';
}