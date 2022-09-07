// Getting Html elements
const gallery = document.querySelector("#gallery");
const video = document.querySelector(".video");
const closeBtn = document.querySelector(".close>span");
const youtube_video = document.querySelector(".youtube_video");
const overlay = document.querySelector(".overlay");

const imagesData = [
  {
    image1:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    image2:
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    image3:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    image4:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    image1:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    image2:
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    image3:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    image4:
      "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const createGallery = () => {
  imagesData.map(({ image1, image2, image3, image4 }, index) => {
    // Creating Tags
    const div = document.createElement("div");
    const img1 = document.createElement("img");
    const img2 = document.createElement("img");
    const img3 = document.createElement("img");
    const img4 = document.createElement("img");

    //  Adding images source
    img1.src = image1;
    img2.src = image2;
    img3.src = image3;
    img4.src = image4;

    // Appending All images to div
    div.append(img1, img2, img3, img4);

    // Adding row class to the div
    div.classList.add("row");

    gallery.append(div);
    const allImages = document.querySelectorAll("#gallery>div>img");
    for (let i = 0; i < allImages.length; i++) {
      allImages[i].classList.add("col-3");
      allImages[i].addEventListener("click", () => {
        video.style.display = "block";
        youtube_video.src =
          "https://www.youtube.com/embed/-qfEOE4vtxE?autoplay=1&mute=1";
        overlay.classList.add("body_overlay");
      });
    }
  });
};

[closeBtn, overlay].map((item) => {
  item.addEventListener("click", () => {
    video.style.display = "none";
    overlay.classList.remove("body_overlay");
    youtube_video.src = "";
  });
});

createGallery();
