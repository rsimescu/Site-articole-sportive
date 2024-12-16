const animatedTitlePart = document.querySelector(".animatedTitlePart");

const words = [
  "Athletes",
  "Family",
  "Champions",
  "Beginners",
  "Teams",
  "Performance",
  "Players",
  "Passionate"
];

let currentIndex = 0;

const textAnimation = () => {
  animatedTitlePart.textContent = words[currentIndex];
  currentIndex = (currentIndex + 1) % words.length; 
};

textAnimation(); 
setInterval(textAnimation, 5000); 
