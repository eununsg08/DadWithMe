const speech = new webkitSpeechRecognition;
const startButton = document.body.querySelector(".chekingButton button:first-child");
const stopButton = document.body.querySelector(".chekingButton button:last-child");

function startBtn(){
  speech.start();
}

function stopBtn(){
  speech.stop();
}

function listening(value){
  console.log(value);
}

startButton.addEventListener("click", startBtn);
stopButton.addEventListener("click", stopBtn);
speech.addEventListener("result", listening);