const modal = document.querySelector("#myModal");

const btn = document.querySelector("#modalBtn");

const span = document.querySelector(".close");

btn.addEventListener("click", () => {
  modal.classList.add("open");
});

span.addEventListener("click", () => {
  modal.classList.remove("open");
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("open");
  }
});
