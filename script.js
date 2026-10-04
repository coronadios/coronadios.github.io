/*
  Personal profile configuration
  Edit these values whenever you want.
*/

const profile = {
  name: "Corona",
  username: "@NoSoyCorona",

  status: "probably coding something",

  currentlyDoing: "coding & experimenting",

  song: {
    title: "Parfum D'etoiles",
    artist: "Ichiko Aoba"
  }
};


/* =========================
   SMALL INTERACTIONS
   ========================= */

document.addEventListener("DOMContentLoaded", () => {

  /*
    Avatar fallback.
    If avatar.jpg doesn't exist, create a simple
    profile placeholder instead of showing a broken image.
  */

  const avatar = document.getElementById("avatar");

  avatar.addEventListener("error", () => {

    avatar.style.display = "none";

    const fallback = document.createElement("div");

    fallback.className = "avatar avatar-fallback";

    fallback.textContent = "C";

    fallback.style.display = "grid";
    fallback.style.placeItems = "center";
    fallback.style.fontSize = "30px";
    fallback.style.fontWeight = "600";
    fallback.style.background = "#151515";
    fallback.style.color = "#aaa";

    avatar.parentElement.insertBefore(
      fallback,
      avatar
    );
  });


  /*
    Tiny music animation.
  */

  const bars = document.querySelectorAll(".music-bars i");

  let phase = 0;

  setInterval(() => {

    phase++;

    bars.forEach((bar, index) => {

      const heights = [
        9,
        15 + ((phase + index * 3) % 8),
        10 + ((phase * 2 + index) % 11),
        14 + ((phase + index) % 9)
      ];

      bar.style.height = `${heights[index]}px`;

    });

  }, 350);


  /*
    Subtle entrance animation.
  */

  const elements = document.querySelectorAll(
    ".profile-card, .section"
  );

  elements.forEach((element, index) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(8px)";

    setTimeout(() => {

      element.style.transition =
        "opacity .5s ease, transform .5s ease";

      element.style.opacity = "1";
      element.style.transform = "translateY(0)";

    }, 80 + index * 70);

  });

});
