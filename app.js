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

function start() {
    seconds = 0;
    if (currentTimer || currentTimer != null) Reset();
    currentTimer = setInterval(timer, 1000);
};

function Reset() {
    clearInterval(currentTimer)

};

function pause() {
    console.log(currentTimer)
};

function timer() {
    seconds++;
    time.textContent = seconds;


};

console.log(time);
console.log(time);