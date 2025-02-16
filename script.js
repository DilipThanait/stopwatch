let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function startStop() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 1000);
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning;
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('display').textContent =
        formatTime(hours) + ':' + formatTime(minutes) + ':' + formatTime(seconds);
}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}

function reset() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('display').textContent = '00:00:00';
    document.getElementById('startStop').textContent = 'Start';
}

