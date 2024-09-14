const buttons = document.getElementsByClassName("buttons"),
   categories = document.getElementsByClassName("categories"),
   earth = document.getElementById("earth-container"),
   landing = document.getElementById("landing-text"),
   linksCircle = document.getElementById("links-circle"),
   aboutMe = document.getElementById("about-me"),
   ccc = document.getElementById("catergories-contents-container"),
   background = document.getElementById("background-div"),
   blurs = document.getElementById("blur");




  let buttonArray = Array.from(buttons);

  // hover event
  function hover(e) {
    for (let j = 0; j < buttons.length; j++) {
      if (buttons[j] !== e.target) {
        buttons[j].style.color = "gray";
      } else {
        buttons[j].style.color = "white"; // Highlight hovered button
      }
    }
  }

  // Click function
  function click(e) {
    let targetIndex = buttonArray.indexOf(e.target), // Get the index in the array
        clickTarget = e.target;

        //if the user click the categories
    if (targetIndex > 2) {
      earth.classList.add("earth-move");
      landing.style.display = "none";
      blurs.style.display = "none";

// this is for categories container when the categories in the circle first click
      setTimeout(() => {
        ccc.style.opacity = 1;
      }, 1000);
      ccc.style.display = "block";

      //this is for the icons inside the circle
      linksCircle.classList.add("links-circle");

      //remove current background
      background.classList.remove("lg:bg-[url('/docs/src/first.jpg')]");
      //change the background
      background.classList.add('lg:bg-[url("/docs/src/second.jpg")]');
      // Add class to the first 3 link buttons
      for (let k = 0; k < 3; k++) {
        buttons[k].classList.add("links-buttons");
      }




      // Add and remove classes to/from categories based on the targetIndex
      for (let z = 0; z < categories.length; z++) {
        if ((targetIndex - 3) === z) {
          categories[z].classList.remove("lg:opacity-0");
          categories[z].classList.add("cate");
          categories[z].classList.remove("earth-contents-out");
        } else {
          categories[z].classList.add("earth-contents-out");
        }
      }

    }
  }


  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("mouseover", hover);
    buttons[i].addEventListener("click", click);
  }
