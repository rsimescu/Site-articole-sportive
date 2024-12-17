const animatedTitlePart = document.querySelector(".animatedTitlePart");
const hiddenElements = document.querySelectorAll(".hidden");

const words = [
  "Athletes",
  "Family",
  "Champions",
  "Beginners",
  "Teams",
  "Performance",
  "Players",
  "Passionate",
];

let currentIndex = 0;

const textAnimation = () => {
  animatedTitlePart.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length;
};

textAnimation();
setInterval(textAnimation, 5000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

hiddenElements.forEach((el) => observer.observe(el))