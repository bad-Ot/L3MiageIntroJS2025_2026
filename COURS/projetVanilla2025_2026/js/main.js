window.onload = init;

function init() {
    console.log("Page loaded and script running. DOM is ready");

    defineListeners();
}

function defineListeners() {
    const bouton = document.querySelector("#btnChangeTitre");
    bouton.onclick = changeTitre;
}

function changeTitre() {
    const titre = document.querySelector("#titre"); 
    titre.innerHTML = "Nouveau Titre Modifié par JavaScript";
}