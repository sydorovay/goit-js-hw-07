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
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    );
  }, "");
}

// // перебрати galleryItems з допомогою callback ф-ції
const galleryMarkup = createGallery(galleryItems);

// //додати розмітку в html
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// // призначити слухача подій на galleryList
galleryList.addEventListener("click", onGalleryItemClick);

//callback (відкриття по кліку )
function onGalleryItemClick(event) {
  // заборонити оновлення сторінки
  event.preventDefault();
  //  отримати data-source зображення;
  const imgSrc = event.target.dataset.source;
  // перевірка присутності кліку по зображенню.
  if (imgSrc) {
    instance.element().querySelector("img").src = imgSrc;
    instance.show();
    // повішати на window прослуховування клавіатури
    window.addEventListener("keydown", сlosingWindowByEscape);
  }
}

// callback для подій слухача кнопки "escape"
const instance = basicLightbox.create(`<img>`, {
  // додати "keydown" до вікна
  onShow: () => {
    window.addEventListener("keydown", сlosingWindowByEscape);
  },
  // видалити "keydown" з вікна
  onClose: () => {
    window.removeEventListener("keydown", сlosingWindowByEscape);
  },
});

// callback (задкриття по кнопці "Escape" )
function сlosingWindowByEscape(event) {
  if (event.code === "Escape") {
    instance.close();
  }
  return;
}
