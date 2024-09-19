

let x;
let y;
let position;
let afterMove = "cannot touch";





// this functions below are for assertive touch
const burgerContainer = document.getElementById("burger-container");
  let status = true;
  let currentView = document.getElementById("current-view");
  let assertiveContainer = document.getElementById("assertive-container");
  let bgBlur = document.getElementById("background-color-blur");
  let cac = document.getElementById("categories-assertive-container");
  let ic = document.getElementById("icon-container");
  


// this function is for active position
function activePosition(){
  cac.classList.remove("none-dislpay");
  cac.classList.add("flex-dislpay");
  
  setTimeout(() => {
    cac.style.opacity = 1;
  }, 500);
  setTimeout(() => {
    cac.style.height = "229px";
  }, 700);
  
  body.style.overflow = "auto";

  status = false;
  }
  


function touchtAssertive(){
  if(status){
    if(position == "right"){
      assertiveContainer.style.right = [ (body.offsetWidth/2) - (assertiveContainer.offsetWidth/2) ] + "px";
    }else if(position == "left"){
      assertiveContainer.style.right = [ (body.offsetWidth/2) - (assertiveContainer.offsetWidth/2) ] + "px";
    }else{
      assertiveContainer.style.right = [ (body.offsetWidth/2) - (assertiveContainer.offsetWidth/2) ] + "px";
    }
  activeBlur();
  activePosition();
  }
  status = false;
  
  
}
  // this function is for style when assertive was clicked or move for blur and icon
  function activeBlur(){
  bgBlur.classList.add("bg-blur");
  burger.style.color = "white";
  burgerContainer.classList.add("assertive-touch");
}

function touchtMain(){
    afterMove = "cannot touch";
  if(status == false){
    assertiveContainer.style.transition = "1s";
    if(y-50 < -51 || y > (window.innerHeight * .94)){
      assertiveContainer.style.top = "68px";
      assertiveContainer.style.transition = "1s ease-in";
    }
    
    if((x + 90) > (window.innerWidth/2)){
      setTimeout(() => {
      assertiveContainer.style.right = window.innerWidth - assertiveContainer.offsetWidth + 65 + "px";
      position = "left";
    }, 500);
       ic.classList.add("left-position");
        burger.classList.add("left-position-margin");
        burger.classList.remove("ml-4");
    }else if((x + 90) < (window.innerWidth/2)){
      setTimeout(() => {
      assertiveContainer.style.right = -70 + "px";
      position = "right";
    }, 500);
         ic.classList.remove("left-position");
        burger.classList.remove("left-position-margin");
        burger.classList.add("ml-4");
    }else{
      setTimeout(() => {
      assertiveContainer.style.right = -70 + "px";
    }, 500);
    }
    setTimeout(() => {
      
  cac.classList.add("none-dislpay");
    }, 2000);
    cac.style.height = 0 + "px";
    
  setTimeout(() => {
    burgerContainer.classList.remove("assertive-touch");
  burger.style.color = "black";
  bgBlur.classList.remove("bg-blur");
  }, 1450);
  body.style.overflow = "auto";
  }

  status = true;
  
}

function touchtmoveAssertive(e){
  e.preventDefault();

    
  status = false;
   x = window.innerWidth - e.touches[0].pageX - 90;
   y =  e.touches[0].screenY - 190;

  assertiveContainer.style.right = x + "px";
  assertiveContainer.style.top = y + "px";

  
  assertiveContainer.style.transition = "none";
  activeBlur();

  afterMove = "can touch";
  
    if(afterMove == "can touch"){
        assertiveContainer.addEventListener("touchend", ()=>{
            activePosition();
        });
    }
 


  
}




 assertiveContainer.addEventListener("touchcancel", ()=>{
  position = "right";
  touchtAssertive();
 })
  
 