const contactUsButton = document.getElementById("contactUsButton");
const findUsButton = document.getElementById("findUsButton");
const main = document.getElementById("main");

contactUsButton.addEventListener("click", () => {
    main.classList.remove("rightPanelActive")
});

findUsButton.addEventListener("click", () => {
    main.classList.remove("rightPanelActive")
});