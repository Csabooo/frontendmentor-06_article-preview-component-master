const icon = document.getElementById("share-icon");
const shareTable = document.querySelector(".share-table.hidden");
const reverseIcon = document.getElementById("icon-reverse-background");
const footerElement = document.querySelector("footer");
const mediaQuery = window.matchMedia("(min-width: 1200px)")

icon.addEventListener("click", () => {
  if (mediaQuery.matches) {
    shareTable.classList.toggle("hidden");
  } else {
    footerElement.style.display = "none";
    shareTable.classList.remove("hidden");
  }
});

reverseIcon.addEventListener("click", () => {
  if (!shareTable.classList.contains("hidden")) {
    shareTable.classList.add("hidden");
    footerElement.style.display = "grid";
  }
});


/* A toggle() metódus megváltoztatja az elem osztályát a megadott osztályhoz képest. 
Tehát, ha az elemnek már van "hidden" osztálya, akkor eltávolítja, ha nincs, akkor hozzáadja. 
Így a fenti kódban a shareTable osztálya egyszerre jelenik meg és tűnik el az ikonra kattintva, 
ha az oldal szélessége meghaladja a 1200px-et, és csak eltűnik, ha a "reverseIcon"-ra kattintanak, 
és a "shareTable" látható volt.
 */



//---------------Eredeti kód, ami nem volt tökéletes--------------------//

/* if (mediaQuery.matches) {
    shareTable.classList.remove("hidden");

} else {
    footerElement.style.display = "none";
    shareTable.classList.remove("hidden");
} */
