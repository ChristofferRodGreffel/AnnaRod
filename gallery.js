// Import image objects

import { imageObjects } from "./imageObjects.js";

// Filtering variables
const filterType = document.querySelectorAll(".filter-type");
const filterDrop = document.querySelectorAll(".filter-drop");

const typeBtns = document.querySelectorAll(".typeButton");
const sizeBtns = document.querySelectorAll(".sizeButton");
const resetBtns = document.querySelectorAll('[id*="reset"]');

// Full size image variables
const fullscreenContainer = document.querySelector("#fullscreen-container");
const fullscreenImage = document.querySelector("#fullscreenImage");
const body = document.querySelector("body");

// FILTERING

const selectedFilter = {
  type: "all",
  size: "all",
};

// Filtering type
typeBtns.forEach((clickedType) => {
  clickedType.addEventListener("click", () => {
    clickedType.style.color = "white";
    clickedType.style.backgroundColor = "#8D8B7A";
    typeBtns.forEach((type) => {
      if (type !== clickedType) {
        type.style.color = "black";
        type.style.backgroundColor = "#EEECE0";
      }
    });

    selectedFilter.type = clickedType.id;
    filterImages(selectedFilter);
    renderImages();
  });
});

// Filtering size
sizeBtns.forEach((clickedSize) => {
  clickedSize.addEventListener("click", () => {
    clickedSize.style.color = "white";
    clickedSize.style.backgroundColor = "#8D8B7A";
    sizeBtns.forEach((size) => {
      if (size !== clickedSize) {
        size.style.color = "black";
        size.style.backgroundColor = "#EEECE0";
      }
    });

    selectedFilter.size = clickedSize.id;
    filterImages(selectedFilter);
    renderImages();
  });
});

// Reset filters
resetBtns.forEach((resetBtn) => {
  resetBtn.addEventListener("click", () => {
    selectedFilter.type = "all";
    selectedFilter.size = "all";

    imageObjects.forEach((image) => {
      image.visible = true;
      typeBtns.forEach((clickedType) => {
        clickedType.style.color = "";
        clickedType.style.backgroundColor = "";
      });
      sizeBtns.forEach((clickedSize) => {
        clickedSize.style.color = "";
        clickedSize.style.backgroundColor = "";
      });
    });

    renderImages();
  });
});

function filterImages(selectedFilters) {
  if (selectedFilters.type === "all" && selectedFilters.size === "all") {
    imageObjects.filter((image) => (image.visible = true));
  } else {
    let checkType = selectedFilters.type === "all" ? false : true;
    let checkSize = selectedFilters.size === "all" ? false : true;
    let checkBoth = checkType && checkSize;

    imageObjects.forEach((image) => {
      if (checkBoth) {
        if (image.typeClass === selectedFilters.type && image.filterSize === selectedFilters.size)
          image.visible = true;
        else image.visible = false;
      } else if (checkSize) {
        if (image.filterSize === selectedFilters.size) image.visible = true;
        else image.visible = false;
      } else if (checkType) {
        if (image.typeClass === selectedFilters.type) image.visible = true;
        else image.visible = false;
      }
    });
  }
}

// Dropdowns
filterType.forEach((filter) => {
  filter.addEventListener("click", () => {
    let dropDiv = filter.querySelector(`#drop${filter.id}`);
    if (window.innerWidth < 1024) {
      if (dropDiv.classList.contains("filter-show")) {
        dropDiv.classList.remove("filter-show");
      } else {
        dropDiv?.classList.add("filter-show");
      }
    } else {
      dropDiv?.classList.add("filter-show");
    }
  });
});

filterDrop.forEach((dropdown) => {
  dropdown.addEventListener("mouseleave", () => {
    filterType.forEach((filter) => {
      let dropDiv = filter.querySelector(`#drop${filter.id}`);
      dropDiv?.classList.remove("filter-show");
    });
  });
});

const gallery = document.querySelector("#gallery");
const toTopBtn = document.querySelector("#toTop");

renderImages(imageObjects);

function renderImages() {
  let setId = 1;
  gallery.innerHTML = imageObjects
    .map((image) => {
      image.id = setId;
      setId++;
      let priceSold;

      if (image.reserved === true) {
        priceSold = `<p id="reserved">Reserveret</p>`;
      } else {
        priceSold =
          image.sold === false
            ? `<p><b>Pris:</b> ${image.price} kr.</p>`
            : `<p id="sold">Solgt</p>`;
      }

      if (image.visible) {
        return `
      <div class="${image.typeClass} image-box">
        <img src="${image.imageSource}" alt="maleri" />
        <div class="image-text">
          <div>
            <p>${image.name}</p>
            <p><b>Størrelse:</b> ${image.size} cm</p>
          </div>
          <div class="right-text">
            <p><b>Nr.</b> ${image.id}</p>
            ${priceSold}
          </div>
        </div>
      </div>`;
      }
    })
    .join("");
  imagesFullscreen();

  if (!imageObjects.find((image) => image.visible === true)) {
    gallery.innerHTML = `<div id="noMatch"><p>Ingen billeder matcher den valgte filtrering</p><p>Prøv at justere filtre eller nulstil</p></div>`;
    gallery.style.columns = "unset";
    toTopBtn.style.display = "none";
  } else {
    gallery.style.columns = "";
    toTopBtn.style.display = "block";
  }
}

// Pictures fullscreen
function imagesFullscreen() {
  const galleryImages = document.querySelectorAll("#gallery img");

  galleryImages.forEach((galleryImage) => {
    galleryImage.addEventListener("click", () => {
      if (window.innerWidth > 1024) {
        fullscreenImage.innerHTML = galleryImage.outerHTML;
        fullscreenImage.style.cursor = "auto";
        fullscreenContainer.style.cursor = "pointer";
        fullscreenContainer.style.display = "flex";
        fullscreenContainer.style.opacity = 1;
        body.style.overflow = "hidden";

        fullscreenContainer.addEventListener("click", (e) => {
          if (e.target !== e.currentTarget) return;
          fullscreenContainer.style.display = "none";
          body.style.overflow = "auto";
        });
      }
    });
  });
}
