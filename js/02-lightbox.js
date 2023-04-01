import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const ElGalery = document.querySelector("ul.gallery");

createGaleryItems();

function createGaleryItems() {
  const itemsArray = [];
  galleryItems.map((el) => {
    //console.log(el.preview);

    const ElArchor = document.createElement("a");
    ElArchor.classList.add("gallery__link");
    ElArchor.setAttribute("href", el.original);

    const ElImagePrev = document.createElement("img");
    ElImagePrev.classList.add("gallery__image");
    ElImagePrev.setAttribute("src", el.preview);
    ElImagePrev.setAttribute("alt", el.description);

    ElArchor.appendChild(ElImagePrev);

    itemsArray.push(ElArchor);
  });

  ElGalery.append(...itemsArray);
}

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
