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
  window.onclick = function(event) {
    var modal = document.getElementById("imageModal");
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }