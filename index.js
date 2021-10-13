let sec = 0;
let min = 0;
let hr = 0;
let intervalID;

let secElement = document.getElementById("seconds");
let minElement = document.getElementById("minutes");
let hrElement = document.getElementById("hours");

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("stop");

function print(val) {
    if (val <= 9) {
        return "0" + val;
    } else {
        return val;
    }
}

function displayTime() {
    secElement.innerHTML = print(sec);
    minElement.innerHTML = print(min);
    hrElement.innerHTML = print(hr);
}

function startTimer() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
    } 
    
    if (min == 60) {
        min = 0;
        hr++;
    } 
    
    displayTime();
}

function start() {
    startButton.disabled = true;
    pauseButton.disabled = false;
    resetButton.disabled = false;
    intervalID = setInterval(startTimer, 1000);
}

function pause() {
    if (pauseButton.innerHTML == "pause") {
        clearInterval(intervalID);
        pauseButton.innerHTML = "continue";
    } else {
        pauseButton.innerHTML = "pause";
        intervalID = setInterval(startTimer, 1000);
    }
}

function reset() {
    clearInterval(intervalID);
    sec = 0;
    min = 0;
    hr = 0;
    secElement.innerHTML = "00";
    minElement.innerHTML = "00";
    hrElement.innerHTML = "00";

    startButton.disabled = false;
    pauseButton.disabled = true;
    resetButton.disabled = true;

    if (pauseButton.innerHTML == "continue") {
        pauseButton.innerHTML = "pause";
    }
}
