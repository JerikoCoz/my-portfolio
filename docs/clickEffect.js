
let od =  document.getElementById("outer-div");
let od2 =  document.getElementById("outer-div2");
let count = 0;
document.body.addEventListener("click", (e)=>{
     let x =  e.clientX;
     let y =  e.clientY;
   
     let box = document.createElement("div");
     box.setAttribute("class", "click-container");

     box.style.top = y - (box.clientWidth / 2) + "px";
     box.style.left = x - (box.clientWidth / 2) + "px";

     document.body.appendChild(box);

     let divs = document.createElement("div");
     let divs2 = document.createElement("div");
   

    
        divs.setAttribute("class", "click-rotate");
 
        divs2.setAttribute("class", "click-rotate2");
     
   
     box.appendChild(divs);
     box.appendChild(divs2);

     setTimeout(() => {
        divs.remove();
     }, 1000);
   count++;
});