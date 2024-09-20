const buttons = document.getElementsByClassName("buttons"),
	categories = document.getElementsByClassName("categories"),
	earth = document.getElementById("earth-container"),
	landing = document.getElementById("landing-text"),
	linksCircle = document.getElementById("links-circle"),
	ccc = document.getElementById("catergories-contents-container");
let eventH = null;
let eventC = null;

let buttonArray = Array.from(buttons);
bodyWidth = document.body.offsetWidth;

// this is for when hover and click links in links and categories
function checkEvent() {
	for (let j = 0; j < buttons.length; j++) { //loop buttons which is links(fb, ins, linkedin) and categories(more abou me, proj, exp)
		buttons[j].classList.remove("white");
		buttons[j].classList.remove("currentCategory");
		buttons[j].classList.add("notcurrent");
		buttons[j].classList.add("gray");
		if (eventH != null) { //if not null then eventH(the target element or the current hover) is white
			eventH.classList.add("white");
			if (eventC != null) { //eventC means target click
				earth.addEventListener("mouseleave", () => {
					eventH.classList.add("gray");
					eventC.classList.add("white");
				});
			}
			if (eventC != null) {
				eventC.classList.remove("gray");
				eventC.classList.remove("notcurrent");
				eventC.classList.add("white");
				eventC.classList.add("currentCategory");
			} else {
				buttons[0].classList.add("currentCategory");
				buttons[0].classList.add("white");
			}
		}

	}

}
// hover event
function hover(e) {
	eventH = e.target;
	statusHover = true;
	checkEvent();
}
// Click function
function clicks(e) {
	eventC = e.target;
	checkEvent();
	let targetIndex = buttonArray.indexOf(e.target);
	console.log(targetIndex)


	setTimeout(() => {
		ccc.style.opacity = 1;
	}, 100);
	ccc.style.display = "block";

	linksCircle.classList.add("links-circle");

	// Add and remove classes from categories based on the targetIndex
	for (let z = 0; z < categories.length; z++) {
		if ((targetIndex) == z) {
			categories[z].classList.remove("lg:hidden");
			categories[z].classList.remove("none-dislpay");
			categories[z].style.display = "flex";
			setTimeout(() => {
				categories[z].classList.remove("earth-contents-out");
				categories[z].classList.remove("lg:opacity-0");
				categories[z].classList.add("cate");
			}, 100);
		} else {
			categories[z].classList.remove("cate");
			categories[z].classList.add("earth-contents-out");
			setTimeout(() => {
				categories[z].style.display = "none";
			}, 100);
		}
	}
}
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("mouseover", hover);
	buttons[i].addEventListener("click", clicks);
}