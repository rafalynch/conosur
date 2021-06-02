const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const body = document.querySelector("body");

  burger.addEventListener("click", () => {
    // toggle nav-bar
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      link.style.animation = "navLinkFade 0.5s ease forwards";
    });
    burger.classList.toggle("toggle");
    body.classList.toggle("body-stuck");
  });

  navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      body.classList.toggle("body-stuck");
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  });
};

function main() {
  navSlide();
}

main();
