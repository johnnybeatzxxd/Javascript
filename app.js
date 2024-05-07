const time = document.querySelector(".Timer");
const buttons = document.querySelectorAll(".button-container button");
console.log(buttons);
for (let button of buttons) {
    button.addEventListener("click", function() {
        button.textContent == "Start" ? start() : button.textContent == "Reset" ? Reset() : button.textContent == "Pause" ? pause() : null;
    })
}
let seconds = 0;
let currentTimer = null;
setTime(seconds);

function start() {
    console.log(currentTimer);

    if (currentTimer != null) Reset()
    currentTimer = setInterval(timer, 1000);
};

function Reset() {
    clearInterval(currentTimer);
    seconds = 0;
    setTime(seconds)
};

function pause() {
    clearInterval(currentTimer);
    currentTimer = null;
};

function timer() {
    seconds++;
    setTime(seconds);


};

function setTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    const formattedTime = [hours, minutes, remainingSeconds].map(unit => unit.toString().padStart(2, '0')).join(':');
    time.textContent = formattedTime;
}

console.log(time);
console.log(time);