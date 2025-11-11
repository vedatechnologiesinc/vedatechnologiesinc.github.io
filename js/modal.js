// Get modal elements
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const captionText = document.getElementById("imageModalCaption");
const closeBtn = document.querySelector(".image-modal-close");

// Add click event to all product images
document.querySelectorAll(".product-icon-container img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

// Close modal on click of X
closeBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal on outside click
modal.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
