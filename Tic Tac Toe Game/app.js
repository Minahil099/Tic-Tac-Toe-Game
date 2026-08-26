let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#New-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


 let turnO = true;//playerX,playerO

 const winPatterns = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
 ];
  

 const checkDraw = () => { 
    let count = 0; 
 
    for(let box of boxes) { 
        if(box.innerText !== "") { 
            count++; 
        } 
    } 
 
    if(count === 9) { 
        msg.innerText = "Game is Draw!"; 
        msgContainer.classList.remove("hide"); 
        DisabledBoxes(); 
    } 
}

const resetGame = () => {
turnO = true;
EnabledBoxes();
msgContainer.classList.add("hide");
}

const EnabledBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText ="";
    }
} 
 boxes.forEach((box) => {
    box.addEventListener("click",() => {
if(turnO){
box.innerText = "O";
box.classList.add("playerO");
turnO =false;
}else{
    box.innerText = "X";
box.classList.add("playerX");
    turnO =true;
}
box.disabled = true;
checkWinner();
checkDraw();
    });
 });

 


 const DisabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
} 

 const showWinner = (winner) => {
    msg.innerText = `Congratulations Winner is ${winner}`;
    msgContainer.classList.remove("hide");
   DisabledBoxes(); 
 }

 const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 !== "" && pos2 !== "" && pos3 !== ""){
            if(pos1 === pos2 && pos2 === pos3){
                showWinner(pos1);
            }
        }
    }
}
newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);