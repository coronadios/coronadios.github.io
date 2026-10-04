const nav = document.querySelector(".nav");
const cursor = document.querySelector(".cursor-glow");


// Navbar

window.addEventListener("scroll", () => {
  nav.classList.toggle(
    "scrolled",
    window.scrollY > 20
  );
});


// Cursor glow

window.addEventListener("pointermove", (event) => {
  cursor.style.left =
    `${event.clientX}px`;

  cursor.style.top =
    `${event.clientY}px`;
});


// Scroll reveal

const revealTargets =
  document.querySelectorAll(
    `
      .section-head,
      .project,
      .research-item,
      .statement,
      .about-grid,
      .now-card,
      .connect
    `
  );

revealTargets.forEach((element) => {
  element.classList.add("reveal");
});


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "visible"
          );

          observer.unobserve(
            entry.target
          );
        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealTargets.forEach((element) => {
  observer.observe(element);
});


// Footer year

document.getElementById("year")
  .textContent =
  new Date().getFullYear();
