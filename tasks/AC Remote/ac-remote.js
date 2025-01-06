let acStatus = false;
let coldDegree = 16;
let fanSpeed = 1;

let tempScreen = document.querySelector("#tempScreen");
let fanScreen = document.querySelector("#fanScreen");
let modeScreen = document.querySelector("#modeScreen");



function toggleAC() {
    if (acStatus == false) {
        acStatus = true;
        let mode = "ON"
        modeScreen.innerText = mode;
        tempScreen.innerText = coldDegree;
        fanScreen.innerText = fanSpeed;
        console.log("AC is Opened");
        console.log("Fan Speed now is : " + fanSpeed);
        console.log("Cold Degree now is: " + coldDegree);
    } else {
        acStatus = false;
        mode = "OFF";
        modeScreen.innerText = mode;
        console.log("AC is Closed");
    }
}

function increamentTemprture() {
    if (coldDegree < 28 && acStatus == true ) {
        coldDegree++;
        tempScreen.innerText = coldDegree;
        console.log("Cold Degree now is: " + coldDegree)
    } else {

    }
}

function decreamentTemprture() {
    if (coldDegree > 16 && acStatus == true ) {
        coldDegree--;
        tempScreen.innerText = coldDegree;
        console.log("Cold Degree now is: " + coldDegree)
    } else {

    }
}

function increamentFanSpeed() {
    if ( fanSpeed < 3 && acStatus == true ) {
        fanSpeed++;
        fanScreen.innerText = fanSpeed;
        console.log("Fan Speed: " + fanSpeed)
    } else if (fanSpeed = 3 ) {
        fanSpeed = 1;
        fanScreen.innerText = fanSpeed;
        console.log("Fan Speed: " + fanSpeed)
        }
}

