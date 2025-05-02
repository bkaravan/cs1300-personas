function expandImage(img) {
  // Get the modal
  var modal = document.getElementById("imageModal");

  // Get the expanded image
  var expandedImg = document.getElementById("expandedImage");

  // Show the modal
  modal.style.display = "block";

  // Set the source of the expanded image
  expandedImg.src = img.src;
}

function closeModal() {
  // Hide the modal
  document.getElementById("imageModal").style.display = "none";
}

// Close modal when clicking outside the image
window.onclick = function (event) {
  var modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
});

// Scroll arrow visibility logic
const scrollArrow = document.getElementById("scrollArrow");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollArrow.classList.add("hidden-arrow");
  } else {
    scrollArrow.classList.remove("hidden-arrow");
  }
});
