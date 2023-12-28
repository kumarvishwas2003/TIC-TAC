var boxes = document.querySelectorAll(".box");
var restart = document.querySelector(".reset-game");
var turnx = true;
var round = document.querySelector(".circle");
var x = document.querySelector(".cross");
var win1 = document.querySelector(".winner1");
var win2 = document.querySelector(".winner2");
const winner = [
  [0, 1, 2],
  [0, 3, 6],
  [3, 4, 5],
  [1, 4, 7],
  [6, 7, 8],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
round.classList.add("hidden");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // box.innerHTML = "❌";
    console.log("box clicked");
    if (turnx === true) {
      box.innerHTML = "❌";
      turnx = false;
      round.classList.remove("hidden");
      x.classList.add("hidden");
      thud();
      console.log("playing");
    } else {
      box.innerHTML = "⭕";
      turnx = true;
      x.classList.remove("hidden");
      round.classList.add("hidden");
      thud();
      console.log("playing");
    }
    box.disabled = true;
    checkWinner();
  });
});
restart.addEventListener("click", () => {
  location.reload();
});
function thud() {
  var audio1 = new Audio("./music/thud.mp3");
  audio1.play();
}
const checkWinner = ()=>{
  for(let pattern of winner){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if(pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val === pos2val && pos2val === pos3val){
        console.log("winner" ,pos1val)
        if(pos1val === "❌"){
            win1.classList.remove("hidden");
        }
        else{
          win2.classList.remove("hidden");
        }
      }
    }
   
  }
}