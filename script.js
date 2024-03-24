let userScore = 0;
let compScore = 0;

const options = document.querySelectorAll(".option");
const msg = document.querySelector("#pick");
const userScorePara = document.querySelector("#you");
const compScorePara = document.querySelector("#comp");

const genComputerChoice = () =>{
    const choices = ["rock","paper","scissors"];
    const randIdx = Math.floor((Math.random())*3)
    return choices[randIdx];
}

const playGame = (userChoice) =>{
    console.log("choice was clicked", userChoice);
    const compChoice = genComputerChoice();
    console.log("comp choice was clicked", compChoice);

    if(userChoice === compChoice){
        console.log("Game Draw");
        msg.innerText ="Game Draw!";
        msg.style.backgroundColor = "rgb(18, 35, 87)";
    }
    else{
        if(userChoice==="rock"){
            if(compChoice==="paper"){
                console.log("Computer Wins");
                msg.innerText ="Computer Wins";
                msg.style.backgroundColor = "red";
                compScore++;
                compScorePara.innerText= compScore;
            }
            else{
                msg.style.backgroundColor = "green";
                console.log("User Wins");
                msg.innerText ="User Wins";
                userScore++;
                userScorePara.innerText= userScore;
            }
        }
        else if(userChoice==="scissors"){
            if(compChoice==="paper"){
                console.log("User Wins");
                msg.style.backgroundColor = "green";
                userScore++;
                msg.innerText ="User Wins";
                userScorePara.innerText= userScore;
            }
            else{
                msg.innerText ="Computer Wins";
                msg.style.backgroundColor = "red";
                console.log("Computer Wins");
                compScore++;
                compScorePara.innerText= compScore;
            }
        }
        else{
            if(compChoice==="paper"){
                msg.innerText ="Computer Wins";
                msg.style.backgroundColor = "red";
                console.log("Computer Wins");
                compScore++;
                compScorePara.innerText= compScore;
            }
            else{
                console.log("User Wins");
                msg.style.backgroundColor = "green";
                userScore++;
                msg.innerText ="User Wins";
                userScorePara.innerText= userScore;
            }
        }
    }
};

options.forEach((option)=>{
    option.addEventListener("click",()=>{
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    });
});