window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  const logo = document.querySelector("nav .logo");
  const scrollY = window.scrollY;

  // z. B. maximal 100px Scrollhöhe = voll sichtbar
  const maxScroll = 100;

  // Clamp zwischen 0 und 1
  let clamp = Math.min(scrollY / maxScroll, 1);

  // Setze den rgba-Hintergrund dynamisch
  nav.style.backgroundColor = `rgba(245, 245, 247, ${clamp * 0.8})`; // 0.8 für max. Sichtbarkeit
  logo.style.color = `rgb(${245 - clamp * (245 - 28)}, ${245 - clamp * (245 - 28)}, ${247 - clamp * (247 - 30)})`;

  if (document.documentElement.scrollTop > 50) {
    document.getElementById("navbar").className = "scrolled";
  } else {
    document.getElementById("navbar").className = "";
  }
});

//Andere Schreibweise:
//window.addEventListener(scroll, myFunction);
//function myFunction() {...};
