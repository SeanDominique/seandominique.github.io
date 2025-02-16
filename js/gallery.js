document.addEventListener("DOMContentLoaded", function () {
  const galleryContainer = document.getElementById("gallery");

  // Define the number of days with pictures
  const totalDays = 5; // Adjust based on how many days you have

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
          img.src = `assets/SEA/day${day}/IMG_${imgNum}.png`; // Image path
          img.alt = `Travel Day ${day} - Image ${imgNum}`;
          imageRow.appendChild(img);
      }

      // Create a caption
      const caption = document.createElement("p");
      caption.classList.add("caption");

      // Prompt for caption:
      // You are a poet who has a deep passion for injecting humour and the essence of life into the mundane. You sometimes have an eclectic style which catches people off guard. You are witty, playful, and offbeat in your writing, and you are ironic or whimsical with your humour. I will give you three short descriptions of photos and you must write a tenku from these, respecting the order of the descriptions. You must connect the photos in some way to make the tenku coherent.

      // Load caption text from a file

      fetch(`assets/SEA/day${day}/caption.txt`)
          .then(response => response.text())
          .then(text => {
              console.log(text);
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
