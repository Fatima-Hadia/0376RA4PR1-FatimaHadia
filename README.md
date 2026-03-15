# 0376RA4PR1 – Exercicis pràctics de DOM

## Descripció
Pràctica d'exercicis de manipulació del DOM amb JavaScript pur.
S'utilitza `querySelector`, events, classes i modificació d'elements HTML en temps real.

---

## Fitxers del projecte

- `index.html` – Estructura HTML de la pàgina
- `style.css` – Estils visuals de la pràctica
- `script.js` – Solucions dels exercicis DOM en JavaScript
- `README.md` – Documentació del projecte

---

## Exercicis i solucions

### Exercici 1 – Selecció i canvi de color
Usa `querySelector` per canviar el color d'un `<h1>` quan la pàgina carregui.

`titol.style.color = 'purple';`

### Exercici 2 – Contingut amb textContent
Fes que un paràgraf `<p>` mostri "Hola Món" usant `textContent`.

`paragraf.textContent = "Hola Món";`

### Exercici 3 – Atributs amb setAttribute
Canvia la `src` d'una imatge `<img>` usant `setAttribute`.

`imatge.setAttribute("src", "https://www.dangerous-business.com/wp-content/uploads/2023/01/DSC03694-1920x1280.jpg");`

### Exercici 4 – Estils en fer clic
Canvia el color de fons `backgroundColor` d'un element en fer-li clic.

`caixa.style.backgroundColor = "#e123ae";`

### Exercici 5 – Classes amb classList.toggle
Crea un botó que afegeixi/tregui la classe `actiu` amb `classList.toggle`.

`textClasse.classList.toggle("actiu");`

### Exercici 6 – Esdeveniments amb alert
Afegeix un `addEventListener` a un botó perquè tregui una alerta.

`alert("Hola!");`

### Exercici 7 – Estructura amb createElement i appendChild
Crea un nou `<li>` amb `createElement` i afegeix-lo a una `<ul>` amb `appendChild`.

`llista.appendChild(nouItem);`

### Exercici 8 – Eliminació amb remove()
Fes que un element desaparegui en fer-li clic usant el mètode `remove()`.

`eliminar.remove();`

---

## Tecnologies utilitzades

- HTML
- CSS
- JavaScript

---

## Autor
Fatima-Hadia