import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryList = galleryItems.reduce(
  (prew, next) =>
    prew +
    `<div class="gallery__item">
  <a class="gallery__link" href="${next.original}">
    <img
      class="gallery__image"
      src="${next.preview}"
      data-source="${next.original}"
      alt="Image description"
    />
  </a>
</div>`,
  ""
);

gallery.insertAdjacentHTML("afterbegin", galleryList);

const openModalPicture = (e) => {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  const instance = basicLightbox.create(
    `
      <img src="${e.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => document.body.addEventListener("keydown", closeOnESC),
      onClose: () => document.body.removeEventListener("keydown", closeOnESC),
    }
  );

  const closeOnESC = (e) => {
    if (e.code === "Escape") {
      console.log(e.code);
      instance.close();
      // document.body.removeEventListener("keydown", closeOnESC);
    }
  };

  instance.show();
};

gallery.addEventListener("click", openModalPicture);
