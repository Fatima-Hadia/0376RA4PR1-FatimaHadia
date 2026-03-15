//RA3Ex7 - Activitats ràpides DOM JS

//1 - Selecció: Usa querySelector per canviar el color d'un <h1> quan la pàgina carregui.
let titol = document.querySelector("#titol-principal");
titol.style.color = 'purple';
console.log(titol);

//2 - Contingut: Fes que un paràgraf <p> mostri "Hola Món" usant textContent.
let paragraf = document.querySelector("#paragraf-hola");
paragraf.textContent = "Hola Món";
console.log(paragraf);

//3 - Atributs: Canvia la 'src' d'una imatge <img> usant setAttribute.
let imatge = document.querySelector("#imatge-canviant");
imatge.setAttribute("src", "https://www.dangerous-business.com/wp-content/uploads/2023/01/DSC03694-1920x1280.jpg");
console.log(imatge);

//4 - Estils: Canvia el color de fons (backgroundColor) d'un element en fer-li clic.
let caixa = document.querySelector("#caixa-estil");
let botoAlerta = document.querySelector("#boto-alerta");
botoAlerta.addEventListener("click", function() {
    caixa.style.backgroundColor = "#e123ae";
});
console.log(caixa);

//5 - Classes: Crea un botó que afegeixi/tregui la classe 'actiu' amb classList.toggle.
let textClasse = document.querySelector("#text-classe");
let botoToggle = document.querySelector("#boto-toggle");
botoToggle.addEventListener("click", function() {
    textClasse.classList.toggle("actiu");
});
console.log(textClasse);
console.log(botoToggle);

//6 - Esdeveniments: Afegeix un addEventListener a un botó perquè tregui una alerta (alert).
botoAlerta.addEventListener("click", function() {
    alert("Hola!");
});

//7 - Estructura: Crea un nou <li> amb createElement i afegeix-lo a una <ul> amb appendChild.
let llista = document.querySelector("#llista-compra");
let botoAfegir = document.querySelector("#boto-afegir");
botoAfegir.addEventListener("click", function() {
    let nouItem = document.createElement("li");
    nouItem.textContent = "Ou";
    llista.appendChild(nouItem);
});
console.log(llista);

//8 - Eliminació: Fes que un element desaparegui en fer-li clic usant el mètode remove().
let eliminar = document.querySelector("#element-eliminar");
eliminar.addEventListener("click", function() {
    eliminar.remove();
});
console.log(eliminar);