document.querySelectorAll(".Boton1").forEach(boton => {
  boton.addEventListener("click", () => {
    const id = boton.dataset.target;
    const section = document.getElementById(id);
    if (section.style.display === "block") {
      section.style.display = "none";
      boton.classList.remove("active");
    } else {
      section.style.display = "block";
      boton.classList.add("active");
    }
  });
});