const contactUsButton = document.getElementById("contactUsButton");
const findUsButton = document.getElementById("findUsButton");
const main = document.getElementById("main");


findUsButton.addEventListener("click", () => {
    main.classList.add("rightPanelActive")
});

contactUsButton.addEventListener("click", () => {
    main.classList.remove("rightPanelActive")
});