import { galleryItems } from './gallery-items.js';
 
// Change code below this line

// Gallery Construction

const galleryContainer = document.querySelector(".gallery");
const galleryToInclude = galleryItems.map(item => `<div class="gallery__item">

    <a class="gallery__link" href="${item.original}">
        <img class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
    </a>    
</div>`).join("");

galleryContainer.insertAdjacentHTML("beforeend", galleryToInclude);

const galleryLinkElements = document.querySelectorAll(".gallery__link");

galleryLinkElements.forEach((galleryLinkElement) => {
    galleryLinkElement.addEventListener("click", (event) => event.preventDefault())
});

// Modal Opening and Closure 

galleryContainer.addEventListener("click", onClickModal);

function onClickModal(event) {

    if (event.target.nodeName !== "IMG") { 
        return;
    };

    const closeModal = (e) => {
        if (e.key === "Escape") {
            imageRealSize.close();
        };
    };

    const imageRealSize = basicLightbox.create(`
    <div class="modal">
       <img
            src="${event.target.dataset.source}"
        />
    </div>`, {
        onClose: () => { 
            document.removeEventListener("keyup", closeModal);
        }
    });

    imageRealSize.show(() => imageRealSizeClose.addEventListener("click", onClickCloseModal));
    
    const imageRealSizeClose = document.querySelector(".modal");

    document.addEventListener("keyup", closeModal);
    
    const onClickCloseModal = (event) => {
        imageRealSize.close();
        event.target.removeEventListener("click", onClickCloseModal);
    };

};