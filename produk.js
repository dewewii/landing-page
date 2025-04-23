// produkscroll
document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("produkScroll");
  const leftButton = document.querySelector(".button-arrow-left");
  const rightButton = document.querySelector(".button-arrow-right");

  leftButton.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  });

  rightButton.addEventListener("click", function () {
    scrollContainer.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  });
});
// end produkscroll
