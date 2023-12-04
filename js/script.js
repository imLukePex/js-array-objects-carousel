/* 
Dato un array di oggetti letterali con: - url dell’immagine - titolo - descrizione
Creare un carosello come nella foto allegata. [vi ripasso quella completa di thumbnails ma quelle rimangono Bonus]



Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.


Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.


Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
*/

const images = [ 
    { 
        image: 'img/01.webp', 
        title: 'Marvel\'s Spiderman Miles Morale', 
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
    }, 
    
    { 
        image: 'img/02.webp', 
        title: 'Ratchet & Clank: Rift Apart', 
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
    }, 
    
    { 
        image: 'img/03.webp', 
        title: 'Fortnite', 
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
    }, 
    
    { 
        image: 'img/04.webp', 
        title: 'Stray', 
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
    }, 
    
    { 
        image: 'img/05.webp', 
        title: "Marvel's Avengers", 
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
    } 
];

const divContainer = document.querySelector(".container");

const slider = 
`<div class="slider">
    <div class="items-container">
        <div class="item active">
            <img src="${images[0].image}" alt="Immagine SpiderMan">
            <div class="title">${images[0].title}</div>
            <div class="subtitle">${images[0].text}</div>
        </div>

        <div class="item">
            <img src="${images[1].image}" alt="Immagine SpiderMan">
            <div class="title">${images[1].title}</div>
            <div class="subtitle">${images[1].text}</div>
        </div>

        <div class="item">
            <img src="${images[2].image}" alt="Immagine SpiderMan">
            <div class="title">${images[2].title}</div>
            <div class="subtitle">${images[2].text}</div>
        </div>

        <div class="item">
            <img src="${images[3].image}" alt="Immagine SpiderMan">
            <div class="title">${images[3].title}</div>
            <div class="subtitle">${images[3].text}</div>
        </div>

        <div class="item">
            <img src="${images[4].image}" alt="Immagine SpiderMan">
            <div class="title">${images[4].title}</div>
            <div class="subtitle">${images[4].text}</div>
        </div>

        <div class="button-next">
            <i class="fa-solid fa-circle-arrow-up"></i>
        </div>

        <div class="button-prev">
            <i class="fa-solid fa-circle-arrow-down"></i>
        </div>
    </div>
</div>`


divContainer.innerHTML += slider;


const items = document.getElementsByClassName('item');
console.log(items);

let activeItem = 0;

// Dichiarazione Arrow Up
const next = document.querySelector('.button-next');

// Dichiarazione Arrow Down
const prev = document.querySelector('.button-prev');

// Arrow Up
next.addEventListener('click', function() {

    if(activeItem < items.length - 1) {
        // togliamo la classe active all'elemento corrente
        items[activeItem].classList.remove('active');

        // incrementiamo l'indice dell'elemento da visualizzare
        activeItem++;

        // aggiungiamo la classe active all'elemento successivo
        items[activeItem].classList.add('active');

    } else if (activeItem === items.length - 1) {
        
        // Rimozione Classe 'active'
        items[activeItem].classList.remove('active');

        // Vai al primo elemento
        activeItem = 0;

        // Aggiunta Classe Active
        items[activeItem].classList.add('active');
    }
});


// Arrow Down
prev.addEventListener('click', function() {

    // togliamo la classe active all'elemento corrente
    items[activeItem].classList.remove('active');

    // Se è all'inizio dell'array
    if (activeItem === 0) {

        // Vai all'ultimo elemento
        activeItem = items.length - 1;

        // Aggiunta classe Active
        items[activeItem].classList.add('active');

    } else {

        // decrementiamo l'indice dell'elemento da visualizzare
        activeItem--;

        // aggiungiamo la classe active all'elemento precedente
        items[activeItem].classList.add('active');
    }

});