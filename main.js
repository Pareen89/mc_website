var countDown;
var secondsLeft;
var timerDisplay = document.querySelector(".display_time_left");
var drip = document.getElementById("dripSound");
var water = document.getElementById("waterSound");
var video = document.getElementById("myVideo")



function timer(totalSeconds) {
  var hour = parseInt(document.getElementById("hours").value, 0);
  var min = parseInt(document.getElementById("minutes").value, 0);
  var sec = parseInt(document.getElementById("seconds").value, 0);
  var totalSeconds = hour * 3600 + min * 60 + sec;
  var now = Date.now();
  var then = now + totalSeconds * 1000;
  displayTimeLeft(totalSeconds);

  countDown = setInterval(() => {
     secondsLeft = Math.round((then - Date.now()) / 1000);

    // get it to stop once it reaches 0
    if (secondsLeft < 0) {
      clearInterval(countDown);
      stop();
      show();
      return;
    }
    // display time left

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(totalSeconds) {
  var hours = Math.floor(totalSeconds / 3600);
  var remainderMinutes = Math.floor((totalSeconds % 3600) / 60);
  var remainderSeconds = totalSeconds % 60;
  var display = ("0" + hours).slice(-2) + ":"+ ("0" + remainderMinutes).slice(-2) + ":" + ("0" + remainderSeconds).slice(-2);
  
  timerDisplay.textContent = display;
}

function hide(){
    var x = document.getElementById("hide");
    if(x.style.display ==="none"){
        x.style.display = "block";
    } else{
        x.style.display="none";
    }
    document.getElementById("reset").style.display="block"
    document.getElementById("start").style.display="none"
}
let count = 0;

function dripRandom() {
  if (secondsLeft < 0){
    return;
  } else {
    drip.play();
    drip.volume = 0.5;
    setTimeout(dripRandom, Math.random() * 10000);
    count++
    document.querySelector("#what").textContent = "Actual number of drips: " + count;
    
    
  }
}


function start(){
  water.play()
  water.loop=true; 
  video.play();
  dripRandom();
}

function stop(){
  water.pause();
  water.currentTime = 0;
  video.pause();
  video.currentTime=0;
}

function show(){
  document.getElementById("num-of-drips").style.display = "block";
}

function showDrips() {
  var xy = document.getElementById("what");
  if (xy.style.display === "block") {
    xy.style.display = "none";
  } else {
    xy.style.display = "block";
  }
}



