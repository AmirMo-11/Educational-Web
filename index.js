document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("toggle");
      navList.classList.toggle("active");
    });
  }
});