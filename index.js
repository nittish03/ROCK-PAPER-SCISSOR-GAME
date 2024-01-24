let ys=0;
let cs=0;
let reset=document.getElementById("reset");
reset.onclick=()=>{
    document.location.reload();
}
let choices=document.querySelectorAll(".choices");
let result=document.getElementById("result");
const compChoice=()=>{
const options=["rock","paper","scissor"];
let random= options[Math.floor(Math.random()*3)];
return random;
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
    const playGame=(userChoice)=>{
        let computerChoice=compChoice();
        let userWin=true;
        if(userChoice==computerChoice){
result.innerText="game was draw!";
        }else if(userChoice=="rock"){
        userWin= computerChoice=="paper"? false : true;
        }else if(userChoice=="paper"){
            userWin=computerChoice=="scissor"?false:true;
        }else if(userChoice=="scissor"){
            userWin=computerChoice=="rock"?false:true;
        }
        if(userWin==true){
            ys++;
            result.innerText="you won , computer choice was "+ computerChoice;
            document.getElementById("ys").innerText=ys;

        }else{
            cs++;
            result.innerText="you lost , computer chocie was "+ computerChoice;
            document.getElementById("cs").innerText=cs;
        }
    }
})
