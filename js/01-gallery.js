import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

// отримати посилання на список
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

// перебрати galleryItems з допомогою callback ф-ції
const galleryMarkup = createGallery(galleryItems);

//додати розмітку в html
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

// призначити слухача подій на galleryList
galleryList.addEventListener("click", onGalleryItemClick);

// заборонити оновлення сторінки
function onGalleryItemClick(event) {
  event.preventDefault();

  // перевірка відсутності кліку по зображенню.
  if (event.target.nodeName !== "IMG") {
    return;
  }
  //  отримати data-source зображення;
  const imgSrc = event.target.dataset.source;

	// показати модальне вікно
  const instance = basicLightbox.create(`
    <img src="${imgSrc}"/>
  `);
  instance.show();
}

document.addEventListener("keydown", onDocumentKeyDown);

function onDocumentKeyDown(event) {
  const instance = basicLightbox.instance();

  if (event.code === "Escape" && instance.visible()) {
    instance.close();
  }
}
