document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("produkScroll");

  window.scrollLeft = function () {
    scrollContainer.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  window.scrollRight = function () {
    scrollContainer.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };
});
