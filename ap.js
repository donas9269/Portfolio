
const phrases = [
  "Bienvenue à notre enquête",
  "Merci pour votre participation",
  "Vos réponses nous aideront à améliorer nos services"
];

const titre = document.getElementById("titre");
let phraseIndex = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < phrases[phraseIndex].length) {
    titre.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 120); // vitesse d’écriture
  } else {
    // Pause avant d'effacer
    setTimeout(() => {
      effacer();
    }, 2000);
  }
}

function effacer() {
  if (charIndex > 0) {
    titre.textContent = phrases[phraseIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(effacer, 60); // vitesse d’effacement
  } else {
    // Passe à la phrase suivante
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(typeWriter, 500);
  }
}

typeWriter();
// Menu burger
const menuToggle = document.querySelector(".menu-toggle");
const navBar = document.querySelector(".nav-bar");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
  
  // Animation de l’icône burger → croix
  if (navBar.classList.contains("active")) {
    menuToggle.innerHTML = "&times;"; // pour afficher la  croix 
  } else {
    menuToggle.innerHTML = "&#9776;"; // pour afficher le menu burger
  }
});
