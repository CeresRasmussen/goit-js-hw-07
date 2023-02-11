import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryList = galleryItems.reduce(
  (prew, next) =>
    prew +
    `<li><a class="gallery__item" href="${next.original}">
  <img class="gallery__image" src="${next.preview}" alt="${next.description}" />
</a></li>`,
  ""
);

gallery.insertAdjacentHTML("afterbegin", galleryList);

var lightBox = new SimpleLightbox(".gallery li .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
  //   overlayOpacity: 0.5,
  //   navText: ["<", ">"],
  scrollZoom: false,
  //   captionPosition: "top",
});
