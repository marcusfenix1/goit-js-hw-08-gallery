'use strict'

import items from './gallery-items.js';

const gallery = document.querySelector('.gallery');

function addGalleryFromArray(array) {
  array.forEach(item => {
    gallery.insertAdjacentHTML("afterbegin", `<li class="gallery__item">
    <a
      class="gallery__link"
      href="${item.original}"
    >
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
  
      <span class="gallery__icon">
        <i class="material-icons">zoom_out_map</i>
      </span>
    </a>
  </li>`)
  })
}

addGalleryFromArray(items)

gallery.addEventListener('click', openFullImage)

function openFullImage() {
  const target = event.target;
  if (target.nodeName !== "IMG") return;

  setActiveImage()
}


setActiveImage() {

}
// console.log(openFullImage())