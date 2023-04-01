import { galleryItems } from "./gallery-items.js";

// Change code below this line

//console.log(galleryItems);

const ElGalery = document.querySelector("ul.gallery");
ElGalery.addEventListener("click", trigerModal);

function trigerModal(event) {
  if (event.target.nodeName == "UL") {
    return;
  }

  event.preventDefault();

  const ModalImg = basicLightbox.create(
    `<img src="${event.target.parentNode.href}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            console.log("escape");
            instance.close();
          }
        });
      },
    }
  );

  ModalImg.show();

  //console.log("event.target: ", event.target.parentNode.href); //parenNode pokazuje rodzica targetu
  //console.log("event.currentTarget: ", event.target.nodeName);
}

//console.log(ElGalery);

createGaleryItems();

function createGaleryItems() {
  const itemsArray = [];
  galleryItems.map((el) => {
    //console.log(el.preview);

    const ElLi = document.createElement("li");
    ElLi.classList.add("gallery__item");

    const ElArchor = document.createElement("a");
    ElArchor.classList.add("gallery__link");
    ElArchor.setAttribute("href", el.original);
    ElLi.appendChild(ElArchor);

    const ElImagePrev = document.createElement("img");
    ElImagePrev.classList.add("gallery__image");
    ElImagePrev.setAttribute("src", el.preview);
    ElImagePrev.setAttribute("alt", el.description);

    ElArchor.appendChild(ElImagePrev);

    itemsArray.push(ElLi);
  });

  ElGalery.append(...itemsArray);
}
