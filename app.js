const icon = document.getElementById("share-icon");
const shareTable = document.querySelector(".share-table.hidden");
const reverseIcon = document.getElementById("icon-reverse-background");
const footerElement = document.querySelector("footer");


icon.addEventListener("click", () => {
    shareTable.classList.remove("hidden");
    footerElement.style.display="none";

});


reverseIcon.addEventListener("click", () => {
    shareTable.classList.add("hidden")
    footerElement.style.display="grid";
});