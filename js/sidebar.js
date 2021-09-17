const bars = document.querySelector("#bars");
const menus = document.querySelector("#menu");

bars.addEventListener("click", () => {
  if (menus.classList.contains("show")) {
    menus.classList.remove("show");
    menus.classList.add("hide");
  } else {
    menus.classList.remove("hide");
    menus.classList.add("show");
  }
});
