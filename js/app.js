const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const visible = 100;

    if (elementTop < windowHeight - visible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
});

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

function display() {
  const nom = document.getElementById('nom').value;
  const prenom = document.getElementById('prenom').value;
  document.getElementById('vu').innerText = `Bienvenue, ${prenom} ${nom}!`;
}