"use strict";

import items from "./gallery-items.js";

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox___image");
const gallery = document.querySelector(".gallery");
const closeButton = document.querySelector(
  'button[data-action="close-lightbox"]'
);
const backdropSpace = document.querySelector(".lightbox__content");


gallery.addEventListener("click", openModal);
closeButton.addEventListener("click", closeModalWindow);
backdropSpace.addEventListener("click", handleBackdropClick);

addGalleryFromArray(items);

function addGalleryFromArray(array) {
  array.forEach(item => {
    gallery.insertAdjacentHTML(
      "afterbegin",
      `<li class="gallery__item">
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
  </li>`
    );
  });
}

function openModal(event) {
  window.addEventListener("keydown", handleKeyPress);
  event.preventDefault();

  const target = event.target;
  if (target.nodeName !== "IMG") return;

  lightboxImage.src = target.dataset.source;
  lightbox.classList.add("is-open");
}

function closeModalWindow() {
  window.removeEventListener("keydown", handleKeyPress);
  lightbox.classList.remove("is-open");
  lightboxImage.src = ""
}

function handleBackdropClick(event) {
  if (event.target !== event.currentTarget) {
    return;
  }
  closeModalWindow();
}

function handleKeyPress(event) {
  if (event.code !== "Escape") {
    return;
  }
  closeModalWindow();
}