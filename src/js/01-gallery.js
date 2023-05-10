// Add imports above this line

import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";



const callToGallary = document.querySelector(".gallery")

function creatItem() {
    let  elements = ""
        
    galleryItems.forEach(item => 
        elements += `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
      title="${item.description}"
    />
  </a>
</li>`)
    
    callToGallary.innerHTML = elements
}

creatItem()


let lightbox = new SimpleLightbox('.gallery a', { captionDelay : 250 });
lightbox.on('show.simplelightbox', function () {
});

console.log(galleryItems);

console.log(galleryItems);
