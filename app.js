// <----------------------------------------- Accesing All the elements of HTML In Js ---------------------------------------->

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


// <------------------------------ For giving the firt turn to O ------------------------------------------------------------>
let turnO = true; // playerX, PlayerO



// <--Giving All the winnig Conditions, Patterns. By using Array and giving patten of boxes.---------------------------------> 

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5 ,8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],  
];

// -------------- After Completing Game or In middle of the game -  Reststart Game or Reset Game Buttons doing this function-> 

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");

}

//  In These lines we Are doing the work of printing the text X Or O In Boxes ---------------------------------------------->
//  For this we add a event listener when click on box if turnO print O and Make turn false. ------------------------------->
//  And in else we pass print X and turnO as true. Disable the box so no ane overwrite the same box again ------------------>
//  Lat thing call function checkwinner. ----------------------------------------------------------------------------------->

boxes.forEach((box) => {
   box.addEventListener("click", () => {
        if (turnO) {
       
        box.innerText ="O";  
        turnO = false;     
        } else {          
                      
        box.innerText = "X";  
        turnO= true; 
        }
    box.disabled = true;        // this is for stoping a button reclicked.
    
    checkWinner();
   });
});

// This funtion made for disableing the boxes after winning so that no one play same game after winnig --------------------->

const disableBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};

// This function made for enabling the boxes after restart or restart Game ------------------------------------------------->

const enableBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

//  After Winning --> Print the winner And show New Game button. disable the boxes after winning--------------------------->

const showWinner = (winner) => {
     msg.innerText = `Congratulations, Winnwer is ${winner}`;
     msgContainer.classList.remove("hide");   
     disableBoxes(); 
     };

// ------------------------ This function use for checking the winner ----------------------------------------------------->
// For checking winner we check individual box innerText and watch for winpatterns indexes for finding same value in line ->
//L-88-90 We are saving boxes values (X or O) in pattern indexes ([0], [1], [2]) in variables pos1Val, pos2VAl, pos3VAl --->
//L-92 for winnig condition firt check winnig three boxes are not to be empty --------------------------------------------->  
//L-93 for winning box1val === box2val && box2val === box3val ------------------------------------------------------------->
//L-94 calling the function showWinner ------------------------------------------------------------------------------------>
const checkWinner = () => {
    for (pattern of winPatterns) {
       
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            }
        }
    }
    };

//  Adding event listener "click" for buttons New Game And Resset Game ------------------------------------------------------>
//  In these event listeners also Call funtion resetFame for starting new Game ---------------------------------------------->

   newGameBtn.addEventListener("click", resetGame);
   resetBtn.addEventListener("click", resetGame);

// <---------------------------------------------- THE END ------------------------------------------------------------------>