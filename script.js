const container=document.getElementsByClassName('container');
var score=document.getElementById('score');
var highScore=document.getElementById('high_score');
const restart=document.getElementById('restart');
const canvas=document.getElementById('gameCanvas');
const body= document.getElementsByTagName('body');
const message=document.getElementsByClassName('message')
var current_score=0;
const pop=new Audio("./assets/ant-smash.mp3");
var high_Score=0;
// ant.src="https://img.icons8.com/?size=100&id=yQ02KJnFbP7M&format=png&color=000000";
const time=1000;

setInterval(antSpawn, time);

function antSpawn(){
    const antDiv=document.createElement('div');
    const ant= document.createElement('img');
    antDiv.className="ant_div";
    ant.src="https://img.icons8.com/?size=100&id=ZEnYOaPjdZs0&format=png&color=000000";
    antDiv.appendChild(ant);
    canvas.appendChild(antDiv);
    console.log("interval");
    ant.height=25;
    antDiv.style.marginLeft= (container.width -600)/2 + "px";
    antDiv.style.top = Math.random() * (gameCanvas.clientHeight - 25) + "px";
    antDiv.style.left = Math.random() * (gameCanvas.clientWidth - 25) + "px";
    ant.addEventListener("click",function()
    {
        ant.src="https://img.icons8.com/?size=100&id=122601&format=png&color=000000";
        pop.currentTime=0;
        pop.play();
        let antClicked=this;
        setTimeout(function(){antClicked.remove()}, 1000);
        current_score++;
        score.innerText=current_score;
        if(current_score>high_Score){
            high_Score=current_score
            highScore.innerText=high_Score;
        }
        console.log(current_score);
    });
    restart.addEventListener("click", restartGame);
    function restartGame(){
        score.innerText=0;
        current_score=0;
        antDiv.remove();
        // console.log("clicked");
    }
}
   


