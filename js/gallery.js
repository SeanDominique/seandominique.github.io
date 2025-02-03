document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");

  // Define the number of days with pictures
  const totalDays = 2; // Adjust based on how many days you have

  for (let day = 1; day <= totalDays; day++) {
      // Create a day container
      const dayDiv = document.createElement("div");
      dayDiv.classList.add("day");

      // Create an image row
      const imageRow = document.createElement("div");
      imageRow.classList.add("image-row");

      // Load 3 images per day
      for (let imgNum = 1; imgNum <= 3; imgNum++) {
          const img = document.createElement("img");
          img.src = `assets/SEA//day${day}/IMG_${imgNum}.HEIC`; // Image path
          img.alt = `Travel Day ${day} - Image ${imgNum}`;
          imageRow.appendChild(img);
      }

      // Create a caption
      const caption = document.createElement("p");
      caption.classList.add("caption");

      // Load caption text from a file
      fetch(`assets/travel/day${day}/caption.txt`)
          .then(response => response.text())
          .then(text => {
              caption.textContent = text;
          })
          .catch(error => {
              caption.textContent = "A day full of wonder.";
          });

      // Append everything to the gallery
      dayDiv.appendChild(imageRow);
      dayDiv.appendChild(caption);
      galleryContainer.appendChild(dayDiv);
  }
});
