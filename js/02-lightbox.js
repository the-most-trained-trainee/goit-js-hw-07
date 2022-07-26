import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

// Gallery Construction

const galleryContainer = document.querySelector(".gallery");
const galleryToInclude = galleryItems.map(item => `
    <a class="gallery__item" href="${item.original}">
    <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>    
`).join("");

galleryContainer.innerHTML = galleryToInclude;

const galleryLinkElement = document.querySelectorAll(".gallery__link");

galleryLinkElement.forEach(() => {
    addEventListener("click", (event) => event.preventDefault());
});

// Simple Light Box initialisation 

let gallery = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });