

let seconds = 00
let tens = 00
const valueTens = document.getElementById('tens')
const valueSeconds = document.getElementById('seconds')
const startBtn = document.getElementById('start-btn')
const stopBtn = document.getElementById('stop-btn')
const resetBtn = document.getElementById('reset-btn')
let Interval

startBtn.addEventListener('click', () => {

    // calls the startTimer function every 10 milliseconds
    Interval = setInterval(startTimer, 10)
})

stopBtn.addEventListener('click', () => {
    // stops the timer
    clearInterval(Interval)
})

resetBtn.addEventListener('click', () => {
    // stops the timer
    clearInterval(Interval)
    // resets the values
    tens = "00";
    seconds = "00";
    // displays resetted values
    valueTens.innerHTML = "00"
    valueSeconds.innerHTML = "00"
})

function startTimer() {
    // increases the value of tens by 1
    tens++
    // when tens is less than or equal to 9, appends a 0 to display
    if (tens <= 9) {
        valueTens.innerHTML = "0" + tens
    } else {
        valueTens.innerHTML = tens
    }
    // when tens reaches 100, it makes 1 second and starts counting tens afresh
    if (tens > 99) {
        seconds++
        valueSeconds.innerHTML = "0" + seconds;
        tens = 0
        valueTens.innerHTML = "0" + 0
    }
    // if the value of seconds is greater than 9 display just seconds without apended 0
    if (seconds > 9) {
        valueSeconds.innerHTML = seconds
    }
}