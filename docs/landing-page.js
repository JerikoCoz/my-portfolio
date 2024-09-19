

const buttons = document.getElementsByClassName("buttons"),
   categories = document.getElementsByClassName("categories"),
   earth = document.getElementById("earth-container"),
   landing = document.getElementById("landing-text"),
   linksCircle = document.getElementById("links-circle"),
   ccc = document.getElementById("catergories-contents-container"),

   blurs = document.getElementById("blur");



let eventH = null;
let eventC = null;

let buttonArray = Array.from(buttons);
    bodyWidth = document.body.offsetWidth;

// this is for when hover and click links in links and categories
function checkEvent(){
    for (let j = 0; j < buttons.length; j++) {//loop buttons which is links(fb, ins, linkedin) and categories(more abou me, proj, exp)
      buttons[j].style.color = "gray";//will set all buttons to gray 
      buttons[j].style.fontWeight = "normal";//will set all buttons to normal font eight 
      buttons[j].style.textDecoration = "none";//will set all buttons to non underlined 
      if(eventH != null){ //if not null then eventH(the target element or the current hover) is white
        eventH.style.color = "white";
        if(eventC != null){//eventC means target click
        earth.addEventListener("mouseleave", ()=>{
          eventH.style.color = "gray";
          eventC.style.color = "white";
        });
      }
        if(eventC != null){
          eventC.style.color = "white";
          eventC.style.fontWeight = "bold";
          eventC.style.textDecoration = "underline";
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
  statusClick = true;
  eventC = e.target;
  checkEvent();
  let targetIndex = buttonArray.indexOf(e.target), // Get the index in the array
      clickTarget = e.target;

  if (targetIndex > 2) {
    earth.classList.add("earth-move");
    earth.classList.remove("earth-container");
    landing.style.display = "none";
    blurs.style.display = "none";


    setTimeout(() => {
      ccc.style.opacity = 1;
    }, 1000);
    ccc.style.display = "block";

    linksCircle.classList.add("links-circle");

    //remove current background
    background.classList.remove("lg:bg-[url('first.WebP')]");
    //change the background
    background.classList.add('lg:bg-[url("second.WebP")]');
    // Add style to the first 3 buttons which is hides the links button
    for (let k = 0; k < 3; k++) {
      buttons[k].classList.add("links-buttons");
    }




    // Add and remove classes from categories based on the targetIndex
    for (let z = 0; z < categories.length; z++) {
      if ((targetIndex - 3) == z) {
        categories[z].classList.remove("lg:hidden");
        categories[z].classList.remove("none-dislpay");
        categories[z].style.display = "flex";
        setTimeout(() => {
          categories[z].classList.remove("earth-contents-out");
        categories[z].classList.remove("lg:opacity-0");
        categories[z].classList.add("cate");
        }, 1000);
      } else {
        categories[z].classList.remove("cate");
        categories[z].classList.add("earth-contents-out");
        setTimeout(() => {
          categories[z].classList.add("none-dislpay");
        }, 1000);
      }
    }

  }
}






for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover", hover);
  buttons[i].addEventListener("click", clicks);
}