const time = document.querySelector(".Timer");
const buttons = document.querySelectorAll(".button-container button");
console.log(buttons);
for (let button of buttons) {
    button.addEventListener("click", function() {
        button.textContent == "Start" ? start() : button.textContent == "Stop" ? stop() : button.textContent == "Pause" ? pause() : null;
    })
}

function start() {};

function stop() {};

function pause() {};

function timer() {};

console.log(time);