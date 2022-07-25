import { galleryItems } from './gallery-items.js';
 
// Change code below this line

// const galleryContainer = document.querySelector(".gallery");
// const galleryToInclude = galleryItems.map(item => `<div class="gallery__item">
//     <a class="gallery__link" href="${item.original}">
//         <img class="gallery__image"
//             src="${item.preview}"
//             data-source="${item.original}"
//             alt="${item.description}"
//         />
//     </a>
// </div>`).join("");

// galleryContainer.innerHTML = galleryToInclude;



const galleryContainer = document.querySelector(".gallery");
const galleryToInclude = galleryItems.map(item => `<div class="gallery__item">
    
        <img class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
        />
    
</div>`).join("");

galleryContainer.innerHTML = galleryToInclude;


galleryContainer.addEventListener("click", onClickModal);

function onClickModal(event) { 

    const imageRealSize = basicLightbox.create(`
    <div class="modal">
       <img width="800" height="600"
            src="${event.target.dataset.source}"
        />
    </div>`
    );
    
    imageRealSize.show()
}





// const instance = basicLightbox.create(`
//     <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg" width="800" height="600">
// `)

// instance.show()






// On galleryItem click - v1 - 18:00
// 20:48 - 12-14
