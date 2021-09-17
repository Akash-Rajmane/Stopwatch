var hr = 0;
var min = 0;
var sec = 0;

var hrElement = document.getElementById("hr");
var minElement = document.getElementById("min");
var secElement = document.getElementById("sec");

var startBtn = document.getElementById("start");
var pauseBtn = document.getElementById("pause");
var resetBtn = document.getElementById("stop");

var isTimeTicking = false; 

function start(){

    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;

    if( isTimeTicking==false ){
        isTimeTicking = true;
        displayTime();
    }
}

function pause(){
    if( isTimeTicking==true && pauseBtn.innerHTML=="pause" ){
        isTimeTicking = false;
        pauseBtn.innerHTML = "continue";
    }
    else if( isTimeTicking==false && pauseBtn.innerHTML=="continue" ){
        isTimeTicking = true;
        pauseBtn.innerHTML = "pause";
        displayTime();
    }
}

function reset(){
    isTimeTicking = false;
    hr = 0;
    min = 0;
    sec = 0;
    hrElement.innerHTML = "00";
    minElement.innerHTML = "00";
    secElement.innerHTML = "00";
    
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;

    if( pauseBtn.innerHTML=="continue" ){
        pauseBtn.innerHTML=="pause";
    }
}


function displayTime() {
    if( isTimeTicking==true ){

        sec++;

        if( sec==59 ){
            sec = 0;
            min++;
        }

        if( min==59 ){
            min = 0;
            hr++;
        }

        if( sec<10 ) {
           sec = sec.toString().padStart(2,0);
        }

        if( min<10 ) {
            min = min.toString().padStart(2,0);
        }

        if ( hr<10 ) {
            hr = hr.toString().padStart(2,0);
        }
        
        secElement.innerHTML = sec;
        minElement.innerHTML = min;
        hrElement.innerHTML = hr;

        setTimeout("displayTime()", 1000);

    }

}