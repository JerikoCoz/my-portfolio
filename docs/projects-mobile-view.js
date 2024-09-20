const next = document.getElementById("next"),
      prev = document.getElementById("prevs"),
      cardContainer = document.getElementById("card-container"),
      burger = document.getElementById("burger"),
      card = document.getElementsByClassName("card");
        let lefts = 0;
        prev.style.color = lefts == 0 ? "gray" : "black";
        function nextt(){
            cardContainer.style.right = lefts == card.length*card[0].clientWidth ? (lefts -= (card.length*card[0].clientWidth)) + "px" : (lefts += card[0].clientWidth) + "px";
            prev.style.color = lefts == 0 ? "gray" : "black";
        }
        function prevs(){
            prev.style.color = lefts == 0 ? "gray" : "black";
            cardContainer.style.right = lefts >= card[0].clientWidth ?  (lefts -= card[0].clientWidth) + "px" : "";
        }
        let touchs = 0;
        function touch(e){
         touchs =  e.touches[0].clientX;
        }
        let currentPosition = 0;
        function touchmove(event){
           currentPosition = event.touches[0].clientX;
        }
        function touchend(){
          if(touchs > currentPosition){
            nextt();
          }else{
            prevs();
          }
        }
        next.addEventListener("click", nextt);
        prev.addEventListener("click", prevs);