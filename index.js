const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    // toggle nav-bar
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      link.style.animation = "navLinkFade 0.5s ease forwards";
    });
    burger.classList.toggle("toggle");
  });

  navLinks.forEach((link, index) => {
    link.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("toggle");
    });
  });
};

function main() {
  navSlide();
}

main();
