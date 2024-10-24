let x;
let y;
let position;
let ismove;
const burgerContainer = document.getElementById("burger-container");
burger = document.getElementById("burger");
let status = true;
let assertiveContainer = document.getElementById("assertive-container");
let bgBlur = document.getElementById("background-color-blur");
let cac = document.getElementById("categories-assertive-container");
let ic = document.getElementById("icon-container");
const backgrounds = document.getElementById("background-div");
function activePosition() {
    cac
        .classList
        .remove("none-dislpay");
    cac
        .classList
        .add("flex-dislpay");
    setTimeout(() => {
        cac.style.opacity = 1
    }, 500);
    setTimeout(() => {
        cac.style.height = "229px"
    }, 700);
    body.style.overflow = "auto";
    status = false
}
function touchtAssertive() {
    if (status) {
  
            assertiveContainer.style.right = [(body.offsetWidth / 2) - (assertiveContainer.offsetWidth / 2)] + "px";

        activeBlur();
        activePosition()
    }
    status = false
}
function activeBlur() {
    bgBlur
        .classList
        .add("bg-blur");
    burger.style.color = "white";
    burgerContainer
        .classList
        .add("assertive-touch")
}
function touchtMain() {
    ismove = "no";
    assertiveContainer.removeEventListener("touchend", addev);
    assertiveContainer.addEventListener("touchend", touchtAssertive);
    if (status == false) {
        assertiveContainer.style.transition = "1s";
        console.log(y)
        if (y > 580 || y > (window.innerHeight * .94)) {
            assertiveContainer.style.top = "68px";
            assertiveContainer.style.transition = "1s ease-in"
        }
        if ((x + 90) > (window.innerWidth / 2)) {
            assertiveContainer.style.right = window.innerWidth - assertiveContainer.offsetWidth + 65 + "px";
      
            ic
                .classList
                .add("left-position");
            burger
                .classList
                .add("left-position-margin");
            burger
                .classList
                .remove("ml-4")
        } else if ((x + 90) < (window.innerWidth / 2)) {
            assertiveContainer.style.right = -70 + "px";

            ic
                .classList
                .remove("left-position");
            burger
                .classList
                .remove("left-position-margin");
            burger
                .classList
                .add("ml-4")
        } else {
            assertiveContainer.style.right = -70 + "px"
        }
        setTimeout(() => {
            cac
                .classList
                .add("none-dislpay")
        }, 500);
        cac.style.height = 0 + "px";
        setTimeout(() => {
            bgBlur
                .classList
                .remove("bg-blur");
            burgerContainer
                .classList
                .remove("assertive-touch");
            burger.style.color = "black"
        }, 1000);
        body.style.overflow = "auto"
    }
    status = true
}
function touchtmoveAssertive(e) {
    status = false;
    x = window.innerWidth - e
        .touches[0]
        .pageX - 90;
    y = e
        .touches[0]
        .screenY - 190;
    assertiveContainer.style.right = x + "px";
    assertiveContainer.style.top = y + "px";
    assertiveContainer.style.transition = "none";
    activeBlur();
    ismove = "yes";
    if (ismove == "yes") {
        assertiveContainer.removeEventListener(
            "touchend",
            touchtAssertive,
            {passive: true}
        );
        assertiveContainer.addEventListener("touchend", () => {
            assertiveContainer.addEventListener("touchend", addev, {passive: true})
        }, {passive: true})
    }
}
function addev() {
    activePosition()
}
assertiveContainer.addEventListener("touchcancel", () => {
    touchtAssertive()
}, {passive: true})
assertiveContainer.addEventListener(
    "touchend",
    touchtAssertive,
    {passive: true}
);
assertiveContainer.addEventListener(
    "touchmove",
    touchtmoveAssertive,
    {passive: false}
);
backgrounds.addEventListener("touchend", touchtMain, {passive: true})