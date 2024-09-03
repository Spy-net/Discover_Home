var loader = document.getElementById("background");

setTimeout(function () {
  loader.style.display = "none";
}, 4000);

document.addEventListener("DOMContentLoaded", function () {
  var galleryLink = document.querySelector('a[href="#Gallery"]');
  var gallerySection = document.querySelector(".Gallery");

  galleryLink.addEventListener("click", function (event) {
    event.preventDefault();
    gallerySection.scrollIntoView({ behavior: "smooth" });
  });
});

function toggleText(id) {
  var moreText = document.getElementById(id);
  var toggleButton = moreText.nextElementSibling;
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "block";
    toggleButton.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    toggleButton.innerHTML = "Read More";
  }
}

