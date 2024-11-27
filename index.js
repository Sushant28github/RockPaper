let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll('.choice')
let msg = document.querySelector("#msg")
let userBoard = document.querySelector("#user-score")
let compBoard = document.querySelector("#comp-score")


const genComChoice = () =>{
    const options = ['rock' , 'paper' , 'scissor']
    // console.log("Comp Choice : " + options[ Math.floor(Math.random(options)*3)])
    return options[ Math.floor(Math.random(options)*3)]
}


const drawGame = ()=>{
    // console.log("draw game")
    msg.innerText = "Draw Game..!"
    msg.style.backgroundColor  = "black"
    msg.style.color  = "white"
}


const showWinner =  (userWin , userChoice , compChoice) =>{
    if(userWin){
        userScore++;
        // console.log("win")
        userBoard.innerText = userScore;    
        msg.innerText = ` You Won..! ${userChoice} Beats ${compChoice}` 
        msg.style.backgroundColor  = "green"
        msg.style.color  = "white"
    }
    else{
        // console.log("loose")
        compScore++;
        msg.innerText = `You loose..! ${compChoice} Beats ${userChoice}` 
        msg.style.backgroundColor  = "red"
        msg.style.color  = "white"
        compBoard.innerText = compScore;
    }
}  


const playGame = (userChoice)=>{
    // console.log( "user Choice : " +(userChoice));
    let compChoice = genComChoice();
    // console.log("comp Choice : " +(compChoice) )
   if(compChoice === userChoice){
    drawGame();
   }
   else{
    let userWin = true;
    if(userChoice === 'rock'){
        userWin = compChoice === "paper" ? false : true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissor"  ? false : true;
    }
    else {
       userWin = compChoice === "rock" ? false : true ;
    }
    showWinner(userWin , userChoice , compChoice);
   }
}

choices.forEach((choice) =>{
    choice.addEventListener("click" , ()=>{
        let userChoice  = choice.getAttribute("id")
        playGame(userChoice);
    })
})