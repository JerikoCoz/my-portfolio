const next = document.getElementById("next"),
    prev = document.getElementById("prevs"),
    cardContainer = document.getElementById("card-container"),
    projectContainer = document.getElementById("project-container"),
    curentView = document.getElementById("current-view"),
    card = document.getElementsByClassName("card");
let lefts = 0;
prev.style.color = lefts == 0
    ? "gray"
    : "black";
function nextt() {
    cardContainer.style.right = lefts == card.length * card[0].clientWidth
        ? (lefts -= (card.length * card[0].clientWidth)) + "px"
        : (lefts += card[0].clientWidth) + "px";
    prev.style.color = lefts == 0
        ? "gray"
        : "black";
}
function prevs() {
    prev.style.color = lefts == 0
        ? "gray"
        : "black";
    cardContainer.style.right = lefts >= card[0].clientWidth
        ? (lefts -= card[0].clientWidth) + "px"
        : "";
}

projectContainer.addEventListener("touchstart", (e) => {
    e.preventDefault();
    let pos = e
        .touches[0]
        .pageX;
    if (pos > window.innerWidth / 2) {
        nextt();
    } else if (pos < window.innerWidth / 2) {
        prevs();
    }

})

next.addEventListener("click", nextt);
prev.addEventListener("click", prevs);