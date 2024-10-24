const next = document.getElementById("next"),
    prev = document.getElementById("prevs"),
    cardContainer = document.getElementById("card-container"),
    projectContainer = document.getElementById("project-container"),
    curentView = document.getElementById("current-view"),
    card = document.getElementsByClassName("card");
if (window.innerWidth >= 1024) {
    let e = Array.from(document.getElementsByClassName("box")),
        t = Array.from(document.getElementsByClassName("blur-effect"));
    document
        .getElementById("card-container")
        .addEventListener("click", () => {
            let l = 100;
            for (let n = 3; n < e.length; n++) {
                let r = l - 50;
                if (
                    e[0].style.zIndex = 6,
                    e[1].style.zIndex = 7,
                    e[2].style.zIndex = 8,
                    0 == l
                ) {
                    e[n].style.right = cardContainer.offsetWidth - e[0].offsetWidth + "px";
                  
                    let i = e.pop();
                    e.unshift(i);
                    let s = t.pop();
                    t.unshift(s);
                    e[n].style.zIndex = 0;
                } else 
                    50 == r
                        ? (
                            e[n].style.width = "500px",
                            e[n].style.height = "auto",
                            e[n].style.bottom = 0,
                            e[n].style.zIndex = 100,
                            t[n].style.opacity = 0,
                            e[n].style.right = cardContainer.offsetWidth / 2 - 250 + "px"
                        )
                        : (
                            e[n].style.width = "262px",
                            e[n].style.height = "auto",
                            e[n].style.bottom = "20px",
                            t[n].style.opacity = .75
                        ),
                    0 == r && (e[n].style.zIndex = 8, e[n].style.right = 0);
                l = r
            }
        }, {passive: true})
} else {
    let l = 0;
    function n() {
        cardContainer.style.right = l == card.length * card[0].clientWidth
            ? (l -= card.length * card[0].clientWidth) + "px"
            : (l += card[0].clientWidth) + "px",
        prev.style.color = 0 == l
            ? "gray"
            : "black"
    }
    function r() {
        prev.style.color = 0 == l
            ? "gray"
            : "black",
        cardContainer.style.right = l >= card[0].clientWidth
            ? (l -= card[0].clientWidth) + "px"
            : ""
    }
    prev.style.color = 0 == l
        ? "gray"
        : "black",
    projectContainer.addEventListener("touchstart", (e) => {
     
        let t = e
            .touches[0]
            .pageX;
        t > window.innerWidth / 2
            ? n()
            : t < window.innerWidth / 2 && r()
    }, {passive: false})
}
next.addEventListener("click", next, {passive: true}),
prev.addEventListener("click", prev, {passive: true});