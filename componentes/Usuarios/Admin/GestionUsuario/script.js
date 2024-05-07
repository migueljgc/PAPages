import "./GestionUsuario";

window.onload = function(){
var userMenu = document.querySelector(".user-menu");
var dropdownContent = userMenu.querySelector(".dropdown-content");

userMenu.addEventListener("click", function () {
    dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
});

// Cerrar el menú desplegable si se hace clic fuera de él
window.addEventListener("click", function (e) {
    if (!userMenu.contains(e.target)) {
        dropdownContent.style.display = "none";
    }
});

}