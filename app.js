let nav = document.querySelector("nav");

addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0px 10px 6px -6px #777";
  }
});
