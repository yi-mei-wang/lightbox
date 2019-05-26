const closeButton = document.querySelector(".lightbox-close");
const lightbox = document.querySelector(".lightbox");
const galleryItems = document.querySelectorAll(".gallery-item");
const lightboxImg = document.querySelector(".lightbox-image");

function hideImage(event){
    event.preventDefault();
    lightbox.classList.add("hidden");
}

function showImage(event){
    let galleryItemParent;
    // Show lightbox
    lightbox.classList.remove("hidden");

    // Get current galleryItem
    const elemClickedOn = event.target;
    
    // if-else to handle
    if (elemClickedOn.childElementCount == 0){
        galleryItemParent = elemClickedOn.parentElement;
        lightboxImg.innerHTML = galleryItemParent.innerHTML;
    }
    else {
        lightboxImg.innerHTML = elemClickedOn.innerHTML;
    }
    // Replace img with current img
}

closeButton.onclick = hideImage;
lightbox.onclick = hideImage;
for (let i = 0; i< galleryItems.length; i++){
    let item = galleryItems[i]

    item.onclick = showImage;
}

// nextSibling