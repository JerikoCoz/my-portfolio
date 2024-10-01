const next = document.getElementById("next"),
    prev = document.getElementById("prevs"),
    cardContainer = document.getElementById("card-container"),
    projectContainer = document.getElementById("project-container"),
    curentView = document.getElementById("current-view"),
    card = document.getElementsByClassName("card");
if (window.innerWidth > 1024) {

    let box = Array.from(document.getElementsByClassName("box"));
    let curtain = Array.from(document.getElementsByClassName("blur-effect"));

    document
        .getElementById("card-container")
        .addEventListener("click", () => {
            let left = 100;
            for (let i = 2; i < box.length; i++) {
                let current = left - 50;
                box[0].style.zIndex = 10;
                box[0].style.display = "flex";
                box[1].style.display = "flex";
                if (left == 0) {
                    box[i].style.right = (cardContainer.offsetWidth) - (box[i].offsetWidth) + "px";
                    box[i].style.zIndex = 9;
                    let boxes = box.pop();
                    box.unshift(boxes);
                    let curtains = curtain.pop();
                    curtain.unshift(curtains);
                } else {
                    if (current == 50) {
                        box[i].style.width = 500 + "px";
                        box[i].style.height = 300 + "px";
                        box[i].style.bottom = 0;
                        box[i].style.zIndex = 100;
                        curtain[i].style.opacity = 0;
                        box[i].style.right = cardContainer.offsetWidth / 2 - 250 + "px";

                    } else {
                        box[i].style.width = 262 + "px";
                        box[i].style.height = 200 + "px";
                        box[i].style.bottom = 20 + "px";
                        curtain[i].style.opacity = 0.75;

                    }
                    if (current == 0) {
                        box[i].style.zIndex = 8;
                        box[i].style.right = 0;
                    }

                }
                left = current;
            }
        });

} else {
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
}
next.addEventListener("click", nextt);
prev.addEventListener("click", prevs);