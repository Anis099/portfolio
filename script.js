console.log("Portfolio website loaded successfully");

const sections = document.querySelectorAll(".section");

const showSection = () => {
  const triggerBottom = window.innerHeight - 100;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add("show");
    }
  });
};

window.addEventListener("scroll", showSection);
showSection();

const text = "Python Developer | Full Stack Learner";
let index = 0;
const speed = 40;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing-text").textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, speed);
  }
}

document.getElementById("typing-text").textContent = "";
typeEffect();