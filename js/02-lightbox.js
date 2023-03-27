import { galleryItems } from "./gallery-items.js";
// // Change code below this line
// console.log(galleryItems);

// // отримати посилання на список
const galleryList = document.querySelector(".gallery");

//callback. створити розмітку і повернути динамічний рядок
function createGallery(items) {
  return items.reduce((acc, { preview, original, description }) => {
    return (
      acc +
      `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
    );
  }, "");
}

// // перебрати galleryItems з допомогою callback ф-ції
const galleryMarkup = createGallery(galleryItems);

// //додати розмітку в html
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

//Підпис зображень с затримкою 
const lightboxGallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
	