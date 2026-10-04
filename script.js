document.addEventListener("DOMContentLoaded", () => {

  const avatar = document.getElementById("avatar");
  const placeholder = document.getElementById("photoPlaceholder");

  /*
   * Si no existe avatar.jpg,
   * mostramos la "C" vintage.
   */

  avatar.addEventListener("load", () => {
    placeholder.style.display = "none";
    avatar.style.display = "block";
  });

  avatar.addEventListener("error", () => {
    avatar.style.display = "none";
    placeholder.style.display = "grid";
  });


  /*
   * Pequeña interacción en las etiquetas.
   */

  const tags = document.querySelectorAll(".likes span");

  tags.forEach((tag, index) => {

    tag.addEventListener("mouseenter", () => {
      tag.style.transform =
        `rotate(${index % 2 === 0 ? "-1deg" : "1deg"})`;
    });

    tag.addEventListener("mouseleave", () => {
      tag.style.transform = "rotate(0deg)";
    });

  });


  /*
   * Evita que los enlaces externos
   * causen comportamientos raros al abrirse.
   */

  document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener("click", () => {
      link.blur();
    });
  });

});
