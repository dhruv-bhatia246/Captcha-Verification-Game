var playing=false;
var score=0;
var action=0;
var r;
var timeremainingval;
var input = document.getElementById("answer");
document.getElementById("startreset").onclick= function(){
    if(playing == true)
    {
        location.reload();
    }
    else{
        playing=true;
        document.getElementById("answer").value = "";
        document.getElementById("viewScore").innerHTML = score;
        document.getElementById("time").style.display = "block";
        document.getElementById("startreset").innerHTML = "Reset Game";
        timeremainingval = 60;
        document.getElementById("gameover").style.display = "none";
        document.getElementById("timeremaining").innerHTML = timeremainingval;
        startcountdown();
        generateQ();
    }
}
function startcountdown(){
    action = setInterval(function(){
        timeremainingval -= 1;
        document.getElementById("timeremaining").innerHTML = timeremainingval;
        if(timeremainingval == 0){
            clearInterval(action);
            document.getElementById("gameover").style.display = "block";
            document.getElementById("gameover").innerHTML = "<p>Game Over!</p><p>Your score is "+ score +"</p>";
            document.getElementById("time").style.display = "none";
            document.getElementById("correct").style.display = "none";
            document.getElementById("tryAgain").style.display = "none";
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";
        }
    },1000);
}
function generateQ(){
    r = Math.random().toString(36).substring(7);
    document.getElementById("text").innerHTML = r;
    document.getElementById("answer").focus();
}
document.getElementById("submit").onclick = function(){
    if(playing==true)
    {
        if(document.getElementById("answer").value == r){
        score++;
        document.getElementById("viewScore").innerHTML = score;
        document.getElementById("correct").style.display = "block";
        document.getElementById("tryAgain").style.display = "none";
        setTimeout(function(){
            document.getElementById("correct").style.display = "none";
        },1000)
        document.getElementById("answer").value = "";
        generateQ();
        }
    else if(document.getElementById("answer").value != r){
        document.getElementById("correct").style.display = "none";
        document.getElementById("tryAgain").style.display = "block";
        setTimeout(function(){
            document.getElementById("tryAgain").style.display = "none";
        },1000)
        }
    }
}
input.addEventListener("keyup",function(e) {
    if(e.keyCode===13){
        document.getElementById("submit").click();
    }
});